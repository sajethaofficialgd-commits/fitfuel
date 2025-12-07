# 🏃‍♂️ FitTrack India - N8N Fitness Tracking App

A comprehensive fitness tracking application built with N8N automation, featuring Google Authentication, Indian Food Nutrition Database, Exercise Logging, Step Counting, and Goal Tracking.

## 📋 Table of Contents

1. [System Overview](#system-overview)
2. [Architecture](#architecture)
3. [Setup Instructions](#setup-instructions)
4. [Google Sheets Structure](#google-sheets-structure)
5. [N8N Workflows](#n8n-workflows)
6. [API Endpoints](#api-endpoints)
7. [UI Flow](#ui-flow)

## 🎯 System Overview

### Features
- ✅ Google OAuth Login
- ✅ User Onboarding with BMR/TDEE Calculation
- ✅ Indian Food Nutrition Tracking (200+ foods)
- ✅ Exercise Logging with Calorie Burn
- ✅ Step Count Tracking
- ✅ Daily Summary Generation
- ✅ Goal Tracking & Recommendations

### Tech Stack
- **Automation**: N8N
- **Database**: Google Sheets
- **Authentication**: Google OAuth 2.0
- **Frontend**: HTML/CSS/JavaScript (Single Page App)

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        USER INTERFACE                           │
│  (HTML/CSS/JS Frontend - Mobile Responsive)                     │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      N8N WEBHOOK ENDPOINTS                       │
│  /auth/google  /onboard  /food  /exercise  /steps  /summary     │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      N8N WORKFLOW ENGINE                         │
│  • User Authentication     • Food Nutrition Lookup               │
│  • BMR/TDEE Calculation    • Exercise Calorie Burn               │
│  • Step Tracking           • Daily Summary Generation            │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      GOOGLE SHEETS DATABASE                      │
│  Users | Food Logs | Exercise Logs | Step Logs | Daily Summary  │
└─────────────────────────────────────────────────────────────────┘
```

## 📊 Google Sheets Structure

See `docs/google-sheets-structure.md` for detailed column specifications.

## 🔄 N8N Workflows

See `workflows/` directory for all workflow JSON files.

## 🚀 Quick Start

1. Set up Google Cloud Project with OAuth credentials
2. Create Google Sheets with required tabs
3. Import N8N workflows
4. Deploy frontend
5. Configure environment variables

---

**Created for Indian Fitness Enthusiasts** 🇮🇳
