# dribble_UI

A small Expo + React Native sign-in UI built with TypeScript. The app presents a clean, centered authentication screen with branded imagery, form inputs, social login placeholders, and account recovery/sign-up prompts.

## Features

- **Expo Router setup**
   - Uses file-based routing through `expo-router`.
   - Main screen lives in `src/app/index.tsx`.
   - Root layout uses a native stack with the header hidden for a full-screen UI.

- **Sign-in screen**
   - Centered layout with a light gray background.
   - Composed from reusable sections:
      - Top branding/header section
      - Email and password form section
      - Social/account action section

- **Branding header**
   - Displays a rounded app icon.
   - Includes a “Sign In” title and tagline: “May the source be with you”.

- **Interactive form**
   - Email input with email keyboard support.
   - Password input with hidden text entry.
   - Basic validation that prompts the user to enter both email and password.
   - Sign-in button provides pressed-state feedback and clears fields after submission.

- **Social login placeholders**
   - Includes Facebook, Google, and Instagram icon buttons.
   - Current social actions show a “feature not available yet” alert.

- **Account actions**
   - “Sign Up” and “Forgot your password?” links are included as placeholders.
   - Links provide visual pressed-state color feedback.

## Tech Stack

- **Expo 55**
- **React 19**
- **React Native 0.83**
- **TypeScript 5.9**
- **Expo Router**
- **Bun** for package management

## App screenshots
<p align="center">
  <img src="./assets/images/App%20image.png" width="300" />
</p>