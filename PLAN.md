# Teacher Planner Application - Master Plan

## Executive Summary
This document outlines the comprehensive plan for developing a React-based Teacher Planner Application that automatically schedules lessons based on the MATATAG Curriculum guidelines. The application will help teachers efficiently plan their academic year by mapping learning competencies to specific dates while considering school calendars, holidays, and time allocations.

## 1. Data Architecture (JSON Schema for React)

### Curriculum Structure
The MATATAG curriculum follows a hierarchical structure that can be modeled as:

```json
{
  "curriculum": {
    "metadata": {
      "subject": "English",
      "grades": [2, 3, 4, 5, 6, 7, 8, 9, 10],
      "version": "2023",
      "quarters": [1, 2, 3, 4]
    },
    "grades": {
      "2": {
        "quarters": {
          "1": {
            "contentStandards": "basic literacy in English, with L1 as a literacy resource",
            "performanceStandards": "demonstrate oracy in English, decode high frequency words",
            "learningCompetencies": [
              {
                "id": "EN2PA-I-1",
                "description": "Recognize rhymes in chants, poems, and stories heard",
                "timeAllocation": "1 week"
              },
              {
                "id": "EN2PWS-I-1",
                "description": "Identify Grade 2 level-appropriate sight words",
                "timeAllocation": "2 weeks"
              }
            ]
          }
        }
      }
    }
  }
}
```

### Key Data Relationships
- **Grades** contain **Quarters**
- **Quarters** contain **Content Standards**, **Performance Standards**, and **Learning Competencies**
- **Learning Competencies** have unique IDs, descriptions, and time allocations
- Each **grade** has specific time allocations per **quarter**

### School Configuration
To map relative time (e.g., "1 week") to specific calendar dates, the application requires a configuration object:
```json
{
  "classSettings": {
    "daysPerWeek": 5,
    "minutesPerSession": 50,
    "startDate": "2024-08-29",
    "gradingPeriodDates": { "q1_end": "2024-10-28" }
  }
}
```

### State Management Architecture
The application will use Redux Toolkit for state management with the following slices:
- `curriculumSlice` - Stores parsed curriculum data
- `scheduleSlice` - Manages current schedule state
- `calendarSlice` - Handles school calendar and holidays
- `uiSlice` - Manages UI state and preferences

## 2. Algorithm Research & Comparison

### Problem Definition
The scheduling problem is a Constraint Satisfaction Problem (CSP) where we need to map learning competencies to specific dates while satisfying:
- Time allocation constraints
- Prerequisite relationships
- School calendar constraints
- Holiday considerations

### Algorithm Options Analysis

#### Option A: Constraint Satisfaction Problem (CSP) with Backtracking
**Concept:** Treat scheduling as a CSP where variables are competencies, domains are time slots, and constraints are prerequisites, time allocations, and school calendar.

**Pros:**
- Handles complex constraints naturally
- Guarantees valid solutions
- Flexible constraint definition

**Cons:**
- Computationally expensive for large datasets
- May struggle with tight constraints
- Complex implementation

**React Integration:** Best implemented as a backend service with React consuming the results

#### Option B: Genetic Algorithm
**Concept:** Use evolutionary algorithms to evolve good schedules through selection, crossover, and mutation.

**Pros:**
- Handles large search spaces well
- Can find good approximate solutions
- Parallelizable

**Cons:**
- No guarantee of optimal solution
- Parameter tuning required
- Stochastic nature makes debugging difficult

**React Integration:** Can run in Web Workers for client-side execution

#### Option C: Greedy Algorithm with Local Search
**Concept:** Start with a basic schedule and iteratively improve it by swapping competencies.

**Pros:**
- Fast execution
- Simple to implement
- Easy to understand and debug

**Cons:**
- May get stuck in local optima
- No guarantee of optimal solution
- Less flexible with constraints

**React Integration:** Perfect for client-side execution in React

### Recommended Algorithm: Option C (Greedy with Local Search)

**Rationale:**
- The dataset size is manageable (10 grades × 4 quarters × ~20 competencies)
- Real-time feedback is important for teachers
- Implementation complexity should be minimized
- Can be enhanced with heuristics for better results

**Algorithm Implementation:**
```typescript
function scheduleCompetencies(competencies, calendar, constraints) {
  // Phase 1: Greedy Assignment
  const schedule = greedyAssign(competencies, calendar, constraints);
  
  // Phase 2: Local Search Optimization
  return localSearchOptimize(schedule, constraints);
}

function greedyAssign(competencies, calendar, constraints) {
  // Sort by priority (time allocation, prerequisites)
  // Assign to earliest available slot that satisfies constraints
}

function localSearchOptimize(schedule, constraints) {
  // Iteratively improve by swapping competencies
  // Use hill climbing with random restarts
}
```

## 3. Autonomous Development Roadmap

### Phase 1: Project Setup and Foundation
**Duration:** 1-2 days
**Tasks:**
- [x] Initialize React project with Vite
- [x] Set up TypeScript configuration
- [x] Install necessary dependencies:
  - React Router for navigation
  - Redux Toolkit for state management
  - Redux Persist (for data persistence across reloads)
  - React Hook Form for form handling
  - Tailwind CSS for styling
  - PDF parsing libraries (pdf-parse, react-pdf)
  - Drag and Drop library (@hello-pangea/dnd)
  - Date manipulation (date-fns)

**Deliverables:**
- Working React development environment
- Basic project structure
- Initial component architecture

### Phase 2: Data Parsing Infrastructure
**Duration:** 2-3 days
**Tasks:**
- [x] Create PDF parsing service to extract curriculum data (Raw Text Extraction)
- [ ] Build JSON schema validation
- [ ] Implement data normalization utilities (Converting Raw Text to JSON)
- [x] Create mock data for development

**Technical Implementation:**
```typescript
// PDF Parser Service
class CurriculumParser {
  async parsePDF(filePath: string): Promise<CurriculumData> {
    // Extract text from PDF
    // Parse hierarchical structure
    // Validate against schema
    // Normalize data format
  }
}

// Data Validation
interface CurriculumSchema {
  subject: string;
  grades: Record<string, GradeData>;
  version: string;
  metadata: Metadata;
}
```

**Deliverables:**
- Working PDF parser
- Validated data structures
- Sample curriculum data

### Phase 3: Core Scheduling Algorithm
**Duration:** 3-4 days
**Tasks:**
- [x] Implement greedy scheduling algorithm
- [x] Add local search optimization (Optional for MVP)
- [x] Integrate Holiday/Calendar constraints
- [ ] Create constraint validation system
- [ ] Implement performance optimization

**Algorithm Components:**
1. **Constraint System:**
   - **School Calendar (Holidays/No-class days)**
   - Prerequisite relationships
   - Resource constraints

2. **Scheduling Engine:**
   - Greedy assignment logic
   - Local search optimization
   - Conflict resolution

3. **Validation System:**
   - Constraint checking
   - Schedule validation
   - Error reporting

**Deliverables:**
- Working scheduling algorithm
- Constraint validation system
- Performance benchmarks

### Phase 4: User Interface Development
**Duration:** 5-6 days
**Tasks:**
- Build grade/quarter selection interface
- Create calendar visualization component
- Implement drag-and-drop scheduling
- Design responsive layout

**UI Components:**
1. **Navigation:**
   - Grade selection
   - Quarter selection
   - Subject switching

2. **Calendar View:**
   - Monthly/weekly views
   - Competency visualization
   - Drag-and-drop interface

3. **Schedule Management:**
   - Add/edit competencies
   - Constraint configuration
   - Schedule export

**Deliverables:**
- Complete user interface
- Responsive design
- Interactive calendar

### Phase 5: Advanced Features
**Duration:** 3-4 days
**Tasks:**
- Implement schedule export functionality
- Create teacher collaboration features
- Add printing support

**Advanced Features:**
1. **Calendar Management:**
   - Event scheduling

2. **Export Functionality:**
   - PDF export
   - Excel export
   - Print optimization

3. **Collaboration:**
   - Schedule sharing
   - Template management
   - Version control

**Deliverables:**
- Advanced calendar features
- Export functionality
- Collaboration tools

### Phase 6: Testing and Optimization
**Duration:** 2-3 days
**Tasks:**
- Unit test all components
- Performance optimization
- User experience improvements
- Bug fixing

**Testing Strategy:**
- Unit tests for algorithms
- Integration tests for components
- End-to-end tests for workflows
- Performance testing

**Optimization Focus:**
- Algorithm performance
- UI responsiveness
- Bundle size optimization
- Memory management

**Deliverables:**
- Complete test coverage
- Optimized performance
- Polished user experience

## 4. Technical Architecture

### Frontend Stack
- **React 18** with Vite for fast development
- **TypeScript** for type safety
- **Redux Toolkit** for state management
- **React Router** for navigation
- **Tailwind CSS** for styling
- **React Hook Form** for form handling

### Data Flow Architecture
```
PDF Files → Curriculum Parser → Redux Store → UI Components → User Actions → Algorithm → Updated Schedule → UI Update
```

### Component Hierarchy
```
App
├── Navigation
├── GradeSelector
├── QuarterSelector
├── CalendarView
│   ├── MonthView
│   ├── WeekView
│   └── DayView
├── ScheduleManager
│   ├── CompetencyList
│   ├── ConstraintEditor
│   └── ScheduleVisualizer
└── ExportManager
```

## 5. Implementation Considerations

### Performance Optimization
- **Algorithm Efficiency:** O(n log n) for greedy assignment, O(n²) for local search
- **Memory Management:** Lazy loading for large datasets
- **UI Responsiveness:** Debounced updates, virtual scrolling for long lists

### User Experience
- **Progressive Enhancement:** Core functionality works without JavaScript
- **Accessibility:** WCAG 2.1 AA compliance
- **Responsive Design:** Mobile-first approach
- **Error Handling:** Graceful degradation and informative error messages

### Data Management
- **Local Storage:** Cache parsed curriculum data
- **Session Management:** Preserve user preferences
- **Data Validation:** Real-time constraint checking

## 6. Success Metrics

### Functional Requirements
- [ ] Parse MATATAG curriculum PDFs correctly
- [ ] Generate valid schedules within 5 seconds
- [ ] Handle all 10 grades and 4 quarters
- [ ] Support drag-and-drop scheduling
- [ ] Export schedules in multiple formats

### Non-Functional Requirements
- [ ] Page load time < 2 seconds
- [ ] Schedule generation time < 5 seconds
- [ ] Mobile responsiveness
- [ ] Accessibility compliance
- [ ] Cross-browser compatibility

## 7. Risk Assessment and Mitigation

### Technical Risks
1. **PDF Parsing Complexity**
   - **Mitigation:** Use established libraries, implement comprehensive testing
   - **Fallback:** Manual data entry option

2. **Algorithm Performance**
   - **Mitigation:** Optimize with heuristics, implement Web Workers
   - **Fallback:** Progressive loading, simplified algorithms

3. **State Management Complexity**
   - **Mitigation:** Use Redux Toolkit, implement proper normalization
   - **Fallback:** Local component state for simple cases

### User Experience Risks
1. **Steep Learning Curve**
   - **Mitigation:** Intuitive UI, comprehensive documentation
   - **Fallback:** Tutorial system, help tooltips

2. **Performance Issues**
   - **Mitigation:** Performance monitoring, optimization
   - **Fallback:** Simplified views, loading states

## 8. Next Steps

### Immediate Actions
1. Set up development environment
2. Create basic project structure
3. Implement PDF parsing service
4. Build initial UI components

### Short-term Goals (1-2 weeks)
1. Complete data parsing infrastructure
2. Implement core scheduling algorithm
3. Build basic calendar interface
4. Add constraint validation

### Medium-term Goals (3-4 weeks)
1. Complete user interface
2. Add advanced features
3. Implement export functionality
4. Conduct user testing

### Long-term Goals (5-6 weeks)
1. Performance optimization
2. Accessibility improvements
3. Documentation completion
4. Deployment preparation

---

**Project Status:** Planning Phase  
**Next Phase:** Project Setup and Foundation  
**Estimated Completion:** 6 weeks  
**Team Size:** 1 developer  
**Technology Stack:** React + TypeScript + Redux + Vite