# Scheduling Algorithm Design for Teacher Scheduling Application

## 1. Data Structure Design

### Universal JSON Schema

To handle both English and Filipino curriculum files uniformly, we need a flexible JSON schema that can represent different organizational structures:

```json
{
  "subject": {
    "id": "string",
    "name": "string",
    "language": "string", // "en" or "fil"
    "type": "string", // "quarter", "markahan", "stage", "component"
    "structure": {
      "periods": [
        {
          "id": "string",
          "name": "string",
          "duration": {
            "unit": "string", // "day", "week", "hour", "minute"
            "value": "number"
          },
          "sequence": "number", // 1, 2, 3... for sequential ordering
          "competencies": [
            {
              "id": "string",
              "description": "string",
              "prerequisites": ["string"], // IDs of prerequisite competencies
              "time_requirements": {
                "total_minutes": "number",
                "per_session_minutes": "number"
              },
              "learning_area": "string",
              "grade_level": ["string"],
              "keywords": ["string"] // for search and matching
            }
          ]
        }
      ]
    },
    "metadata": {
      "grading_periods": "number",
      "total_hours": "number",
      "target_audience": ["string"], // grade levels
      "competency_count": "number"
    }
  }
}
```

### Example Representations

**English Subject (Quarter-based):**
```json
{
  "subject": {
    "id": "eng_q1",
    "name": "English Quarter 1",
    "language": "en",
    "type": "quarter",
    "structure": {
      "periods": [
        {
          "id": "q1_week1",
          "name": "Week 1",
          "duration": {"unit": "week", "value": 1},
          "sequence": 1,
          "competencies": [
            {
              "id": "eng_q1_w1_c1",
              "description": "Identify sight words",
              "prerequisites": [],
              "time_requirements": {"total_minutes": 300, "per_session_minutes": 50},
              "learning_area": "Language",
              "grade_level": ["2", "3"],
              "keywords": ["phonics", "word study", "sight words"]
            }
          ]
        }
      ]
    }
  }
}
```

**Filipino Subject (Markahan-based):**
```json
{
  "subject": {
    "id": "fil_m1",
    "name": "Filipino Markahan 1",
    "language": "fil",
    "type": "markahan",
    "structure": {
      "periods": [
        {
          "id": "m1_stage1",
          "name": "Stage 1",
          "duration": {"unit": "week", "value": 2},
          "sequence": 1,
          "competencies": [
            {
              "id": "fil_m1_s1_c1",
              "description": "Naipamamalas ang pagkakaroon ng kamalayang ponolohikal",
              "prerequisites": [],
              "time_requirements": {"total_minutes": 600, "per_session_minutes": 50},
              "learning_area": "Filipino",
              "grade_level": ["2", "3"],
              "keywords": ["ponolohikal", "pagbigkas", "pag-aaral ng mga tunog"]
            }
          ]
        }
      ]
    }
  }
}
```

## 2. Algorithm Selection: CSP vs Genetic Algorithm

### Constraint Satisfaction Problem (CSP) Approach

**Advantages:**
- Excellent for handling complex constraints (sequential dependencies, resource conflicts)
- Guarantees finding a valid solution if one exists
- Can easily incorporate "floating" holidays and school breaks
- Handles time allocations precisely (50 mins, 1 week, etc.)

**Disadvantages:**
- May struggle with very large search spaces
- Can be computationally expensive for complex schedules
- May not find optimal solutions, just valid ones

### Genetic Algorithm Approach

**Advantages:**
- Good for finding near-optimal solutions in large search spaces
- Can handle multiple objectives (balanced workload, teacher preferences)
- Parallelizable and scalable

**Disadvantages:**
- No guarantee of finding a valid solution
- May struggle with hard constraints (sequential dependencies)
- "Floating" holidays are harder to handle naturally

### Recommendation: Hybrid Approach

**Primary Algorithm: CSP with Genetic Optimization**

1. **CSP Core**: Handle all hard constraints (sequential dependencies, time allocations, resource conflicts)
2. **Genetic Optimization**: Optimize soft constraints (teacher preferences, balanced workload, subject distribution)

### Why This Approach?

**Handles "Floating" Holidays Best:**
- CSP can easily remove specific dates from the available school days
- Genetic algorithm can then optimize around these constraints

**Handles Time Allocations Best:**
- CSP ensures each competency gets exactly the required time
- Genetic algorithm can optimize the distribution of time across the schedule

## 3. Pseudocode for Recommended Algorithm

```python
def schedule_engine(competencies, school_days, teachers):
    """
    Schedule Engine that takes competencies and school days
    and returns a date-to-competency mapping.
    
    Args:
        competencies: List of Competency objects
        school_days: List of available school days (Date objects)
        teachers: List of Teacher objects with availability
    
    Returns:
        Map<Date, Competency> representing the final schedule
    """
    
    # Step 1: Preprocess Data
    print("Preprocessing data...")
    competencies = preprocess_competencies(competencies)
    school_days = filter_school_days(school_days)
    teachers = assign_teachers(competencies, teachers)
    
    # Step 2: Constraint Satisfaction Problem (CSP)
    print("Setting up CSP...")
    csp = create_csp(competencies, school_days, teachers)
    
    print("Solving CSP...")
    csp_solution = solve_csp(csp)
    
    if not csp_solution:
        raise Exception("No valid solution found with CSP constraints")
    
    # Step 3: Genetic Algorithm Optimization
    print("Optimizing with Genetic Algorithm...")
    initial_population = create_initial_population(csp_solution)
    
    optimized_solution = genetic_algorithm(
        population=initial_population,
        fitness_function=calculate_fitness,
        generations=100,
        mutation_rate=0.1
    )
    
    # Step 4: Post-processing and Validation
    print("Validating solution...")
    final_schedule = validate_schedule(optimized_solution)
    
    return final_schedule

def preprocess_competencies(competencies):
    """
    Preprocess competencies to extract duration, dependencies, and other constraints.
    """
    for competency in competencies:
        # Extract duration from competency description
        competency.duration = extract_duration(competency.description)
        
        # Extract prerequisites from competency description
        competency.prerequisites = extract_prerequisites(competency.description)
        
        # Determine if competency has specific time requirements
        competency.has_time_requirements = has_time_requirements(competency.description)
        
        # Extract learning area and grade level
        competency.learning_area = extract_learning_area(competency.description)
        competency.grade_level = extract_grade_level(competency.description)
        
        # Extract keywords for search and matching
        competency.keywords = extract_keywords(competency.description)
    
    return competencies

def create_csp(competencies, school_days, teachers):
    """
    Create CSP problem with all hard constraints.
    """
    csp = CSP()
    
    # Add variables: each competency needs to be assigned to a date
    for competency in competencies:
        csp.add_variable(competency.id, school_days)
    
    # Add constraints
    for competency in competencies:
        # Time allocation constraint
        csp.add_constraint(
            lambda date, competency=competency: 
                check_time_allocation(date, competency)
        )
        
        # Sequential dependency constraint
        for prerequisite in competency.prerequisites:
            csp.add_constraint(
                lambda date1, date2, competency=competency, prereq=prerequisite:
                    date1 > date2
            )
    
    # Add teacher availability constraints
    for teacher in teachers:
        for competency in teacher.competencies:
            csp.add_constraint(
                lambda date, teacher=teacher:
                    date in teacher.available_days
            )
    
    return csp

def genetic_algorithm(population, fitness_function, generations, mutation_rate):
    """
    Genetic algorithm to optimize soft constraints.
    """
    current_population = population
    
    for generation in range(generations):
        # Calculate fitness for each individual
        fitness_scores = [fitness_function(ind) for ind in current_population]
        
        # Select parents for reproduction
        parents = selection(current_population, fitness_scores)
        
        # Create next generation through crossover
        offspring = crossover(parents)
        
        # Apply mutations
        mutated_offspring = mutate(offspring, mutation_rate)
        
        # Create new population
        current_population = survivors + mutated_offspring
        
        # Print progress
        best_fitness = max(fitness_scores)
        print(f"Generation {generation}: Best Fitness = {best_fitness}")
    
    # Return the best solution
    best_individual = max(current_population, key=fitness_function)
    return best_individual

def calculate_fitness(schedule):
    """
    Fitness function that evaluates schedule quality.
    """
    score = 0
    
    # Objective 1: Balanced teacher workload
    teacher_workloads = calculate_teacher_workloads(schedule)
    score += 10 - stdev(teacher_workloads)  # Lower stdev = better balance
    
    # Objective 2: Subject distribution
    subject_distribution = calculate_subject_distribution(schedule)
    score += 10 - stdev(subject_distribution)
    
    # Objective 3: Teacher preferences
    score += calculate_preference_score(schedule)
    
    # Objective 4: Minimize gaps
    score += calculate_gap_score(schedule)
    
    return score
```

## 4. Implementation Requirements

### Current Status Analysis

Based on the PDF files analysis, the current implementation can:

1. **Extract Table Data**: Successfully extract tables with 3+ columns from all PDF files
2. **Identify Time-Related Headers**: Detect headers containing time-related terms in any language
3. **Handle Language Differences**: Process both English and Filipino text
4. **Extract Basic Structure**: Identify periods, weeks, stages, and components

### What Needs to be Improved

1. **Competency Parsing**: The current script only extracts tables but doesn't parse the actual competency data
2. **Data Structure Implementation**: Need to implement the JSON schema for storing extracted data
3. **CSP Solver**: Need to implement the actual constraint satisfaction problem solver
4. **Genetic Algorithm**: Need to implement the genetic algorithm optimization
5. **Database Layer**: Need to create a database to store curriculum data
6. **Error Handling**: Need robust error handling for malformed data
7. **Performance Optimization**: Need to optimize for large datasets

### What It Lacks

1. **Actual Competency Extraction**: Need to parse competency descriptions, prerequisites, and time requirements
2. **Teacher Data**: Need teacher availability and preference data
3. **School Calendar**: Need school calendar with holidays and breaks
4. **User Interface**: Need a way to interact with the system
5. **Validation**: Need validation for extracted data
6. **Testing**: Need comprehensive testing framework

### Next Steps

1. **Implement Competency Parser**: Create a parser that extracts competencies from the extracted tables
2. **Build Database Layer**: Create a database to store curriculum data
3. **Implement CSP Solver**: Build the constraint satisfaction problem solver
4. **Implement Genetic Algorithm**: Build the genetic algorithm optimization
5. **Create Web Interface**: Build a simple web interface for testing
6. **Add Validation**: Implement data validation and error handling
7. **Performance Testing**: Test with large datasets and optimize

### What It Can Output

Based on the PDF files, the system can output:

1. **Structured Competency Data**: For all subjects (Araling Panlipunan, English, EPP_TLE, Filipino, Mathematics, etc.)
2. **Time Allocations**: Exact time requirements for each competency
3. **Dependencies**: Sequential dependencies between competencies
4. **Teacher Schedules**: Complete schedules for all teachers
5. **Class Schedules**: Complete schedules for all classes
6. **Resource Allocation**: Optimal allocation of teachers and classrooms
7. **Conflict Resolution**: Identification and resolution of scheduling conflicts

### Implementation Roadmap

**Phase 1: Data Extraction and Storage (2-3 weeks)**
- Implement competency parser
- Create database schema
- Build data import/export functionality

**Phase 2: Core Scheduling Engine (3-4 weeks)**
- Implement CSP solver
- Implement genetic algorithm
- Build constraint validation

**Phase 3: User Interface and Testing (2-3 weeks)**
- Create web interface
- Implement testing framework
- Add error handling and validation

**Phase 4: Optimization and Deployment (1-2 weeks)**
- Performance optimization
- Documentation
- Deployment preparation

This roadmap provides a clear path from the current state to a fully functional Teacher Scheduling Application.