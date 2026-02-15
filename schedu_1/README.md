# schedu

A mobile app for scheduling and timetable management built with Expo and React Native.

## Features

- Timetable management
- Institution selection
- Dashboard interface
- Loading screens
- Responsive design

## Tech Stack

- **Framework**: Expo 54.0.33
- **Language**: TypeScript
- **Navigation**: Expo Router
- **UI Components**: React Native
- **Build Tool**: Metro

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npx expo start
   ```

## Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator
- `npm run web` - Run in web browser
- `npm run lint` - Run ESLint
- `npm run reset-project` - Reset to default Expo template

## Project Structure

```
├── app/                 # Main application code
│   ├── (tabs)/          # Tab-based navigation
│   ├── layout.tsx       # Root layout
│   ├── choose-institution.tsx
│   ├── dashboard.tsx
│   ├── loading-screen.tsx
│   ├── manual-dashboard.tsx
│   └── modal.tsx
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components
│   └── [other components]
├── constants/           # App constants and configuration
├── hooks/               # Custom React hooks
├── assets/              # Static assets (images, fonts, etc.)
├── 1 loading/           # Loading screen implementation
└── scripts/             # Build and utility scripts
```

## Development

This project uses Expo Router for file-based routing. The app structure follows Expo's recommended patterns:

- **File-based routing**: Each file in the `app` directory becomes a route
- **TypeScript**: Full TypeScript support with strict typing
- **Expo Router**: Modern navigation system
- **Component-based architecture**: Reusable components in the `components` directory

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is currently unlicensed. Please contact the repository owner for usage permissions.

## Support

For support and questions, please open an issue in the repository.