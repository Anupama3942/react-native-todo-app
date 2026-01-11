# 📱 Todo App - React Native with Convex Backend

A beautiful, fully-featured Todo application built with React Native, Expo, and Convex. Features a modern gradient-based UI, real-time sync, dark/light mode, and comprehensive task management capabilities.

## ✨ Features

### 🎯 Core Todo Management
- **Add new todos** with intuitive input
- **Mark todos as complete/incomplete** with visual feedback
- **Edit todos** inline with save/cancel options
- **Delete todos** with confirmation dialog
- **Real-time sync** across all devices

### 🎨 Beautiful UI/UX
- **Gradient-based design** throughout the app
- **Dark/Light mode** with system-wide theme support
- **Smooth animations** and transitions
- **Visual progress tracking** with completion percentage
- **Empty states** with helpful messaging
- **Loading indicators** for async operations

### 📊 Progress & Statistics
- **Real-time progress bar** showing completion percentage
- **Comprehensive stats** in Settings:
  - Total todos count
  - Completed todos
  - Active todos
- **Visual indicators** for all statuses

### ⚙️ Settings & Preferences
- **Theme toggle** (Dark/Light mode)
- **Notification preferences** (toggle on/off)
- **Auto-sync** configuration
- **Danger zone** with app reset functionality

### 🔄 Data Management
- **Real-time database** with Convex
- **Local preferences** with AsyncStorage
- **Error handling** with user-friendly alerts
- **Optimistic updates** for smooth UX

## 🛠️ Tech Stack

### Frontend
- **React Native** - Cross-platform mobile framework
- **Expo** - Development platform and SDK
- **TypeScript** - Type safety and better developer experience
- **Expo Router** - File-based routing
- **Linear Gradient** - Beautiful gradient backgrounds

### Backend
- **Convex** - Real-time database and backend platform
- **Convex React Client** - Real-time data synchronization

### UI & Styling
- **React Native Stylesheet** - Custom styling system
- **Theme Provider** - Dynamic theming system
- **Expo Vector Icons** - Icon library
- **React Native Safe Area Context** - Safe area handling

### State & Storage
- **Convex Hooks** - Data fetching and mutations
- **AsyncStorage** - Local preference storage
- **React Context** - Theme management

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- Convex account (free tier available)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Anupama3942/react-native-todo-app.git
   cd todo-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up Convex**
   - Create a project at [convex.dev](https://convex.dev)
   - Copy your deployment URL
   - Create a `.env` file in the root:
     ```
     EXPO_PUBLIC_CONVEX_URL=your_convex_url_here
     ```

4. **Push the Convex schema**
   ```bash
   npx convex dev
   # This will deploy your schema and functions
   ```

5. **Run the app**
   ```bash
   npx expo start
   ```
   
   Then:
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan QR code with Expo Go app (physical device)

## 📁 Project Structure

```
todo-app/
├── app/                          # Main app directory (Expo Router)
│   ├── (tabs)/                   # Tab navigation
│   │   ├── index.tsx            # Home screen (Todos)
│   │   └── settings.tsx         # Settings screen
│   └── _layout.tsx              # Root layout with providers
├── assets/
│   └── styles/                  # Style files
│       ├── home.styles.ts       # Home screen styles
│       └── settings.styles.ts   # Settings screen styles
├── components/                  # Reusable components
│   ├── DangerZone.tsx          # Reset app component
│   ├── EmptyState.tsx          # Empty todos state
│   ├── Header.tsx              # Home screen header
│   ├── LoadingSpinner.tsx      # Loading component
│   ├── Preferences.tsx         # Settings preferences
│   ├── ProgressStats.tsx       # Stats display
│   └── TodoInputs.tsx          # Todo input component
├── convex/                     # Backend functions
│   ├── _generated/            # Generated types (auto)
│   ├── schema.ts              # Database schema
│   └── todos.ts               # Todo mutations/queries
├── hooks/                     # Custom hooks
│   └── useTheme.tsx           # Theme management hook
└── README.md                  # This file
```

## 🎨 Theming System

The app features a comprehensive theming system with:

### Light Theme
- Clean, bright interface
- Blue-based primary colors
- High contrast text

### Dark Theme
- Deep blue/black background
- Easy-on-eyes color palette
- Consistent gradient design

### Customization
- Dynamic color schemes based on theme
- Gradient definitions for all UI elements
- Consistent spacing and typography

## 📱 Screens

### Home Screen
- Task list with completion status
- Progress bar showing completion percentage
- Add new todo input
- Edit/Delete actions per todo

### Settings Screen
- Progress statistics cards
- Preferences (theme, notifications, sync)
- Danger zone with app reset
- Consistent gradient design

## 🔧 Convex Backend

### Schema
```typescript
todos: {
  text: string
  isCompleted: boolean
}
```

### Functions
- `getTodos` - Fetch all todos
- `addTodo` - Create new todo
- `updateTodo` - Edit todo text
- `toggleTodo` - Mark complete/incomplete
- `deleteTodo` - Remove single todo
- `clearAllTodos` - Reset all data

## 🎯 Key Features Explained

### Real-time Updates
Using Convex's reactive queries, the app updates in real-time across all connected devices without manual refreshing.

### Theme Persistence
User's theme preference is saved locally using AsyncStorage and persists across app restarts.

### Error Handling
Comprehensive error handling with user-friendly alerts for all operations (add, edit, delete, toggle).

### Performance Optimizations
- FlatList for efficient todo rendering
- Keyboard handling for smooth UX
- Optimistic updates for immediate feedback
- Memoized styles to prevent unnecessary re-renders

## 📲 Building for Production

### iOS
```bash
expo build:ios
```

### Android
```bash
expo build:android
```

### EAS Build (Recommended)
```bash
eas build --platform all
```

## 🧪 Testing the App

### Development
```bash
# Start development server
npx expo start

# Run on specific platform
npx expo start --ios
npx expo start --android
```

### Production Build Testing
```bash
# Build for testing
eas build --platform ios --profile preview

# Install on test device
# Use TestFlight (iOS) or internal testing (Android)
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- [Expo](https://expo.dev/) for the amazing development platform
- [Convex](https://convex.dev/) for the real-time backend
- [React Native](https://reactnative.dev/) community for awesome libraries
- [Expo Vector Icons](https://icons.expo.fyi/) for beautiful icons

## 📞 Support

For support, email your-email@example.com or open an issue in the GitHub repository.

## 🔗 Links

- [Live Demo](#) *[Add your demo link here]*
- [API Documentation](https://dashboard.convex.dev/) *[Your Convex dashboard]*
- [Expo Documentation](https://docs.expo.dev/)
- [Convex Documentation](https://docs.convex.dev/)

---

<div align="center">
Made with ❤️ using React Native & Expo

⭐ Star this repo if you found it helpful!
</div>
