# SnapBoard Application

A full-featured Express.js web application with user authentication, responsive design, and modern UI components.

## Features

### 🔐 Authentication System
- User registration and login
- Passport.js integration for authentication
- Session management with express-session
- Flash messages for user feedback
- Secure password handling

### 🎨 Responsive Design
- Mobile-first responsive layout
- Animated hamburger navigation menu
- Modern card-based UI components
- CSS Grid and Flexbox layouts
- Smooth animations and transitions

### 📱 UI Components
- **Navigation Bar**: Fixed header with mobile hamburger menu
- **Card Gallery**: Responsive masonry-style photo gallery
- **User Profiles**: User information cards with stats
- **Login/Register Forms**: Styled authentication forms
- **Project Cards**: Showcase cards for projects/content

## Technology Stack

### Backend
- **Express.js** - Web application framework
- **Passport.js** - Authentication middleware
- **EJS** - Template engine
- **Express-session** - Session middleware
- **Connect-flash** - Flash message middleware
- **Morgan** - HTTP request logger
- **Cookie-parser** - Cookie parsing middleware

### Frontend
- **Vanilla JavaScript** - Client-side interactions
- **CSS3** - Modern styling with animations
- **Responsive Design** - Mobile-first approach
- **Google Fonts** - Custom typography (Nunito, Gilroy)

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup Steps
1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create required directories**
   ```bash
   mkdir views routes public
   mkdir public/stylesheets public/javascripts public/images
   ```

4. **Set up environment variables** (create `.env` file)
   ```env
   SESSION_SECRET=your-secret-key-here
   PORT=3000
   NODE_ENV=development
   ```

5. **Start the application**
   ```bash
   npm start
   # or for development
   npm run dev
   ```

6. **Visit the application**
   ```
   http://localhost:3000
   ```

## Project Structure

```
project/
├── app.js                 # Main application file
├── routes/
│   ├── index.js          # Main routes
│   └── users.js          # User authentication routes
├── views/                # EJS templates
│   ├── index.ejs
│   ├── login.ejs
│   ├── register.ejs
│   └── error.ejs
├── public/
│   ├── stylesheets/
│   │   ├── style.css     # Main styles
│   │   ├── gallery.css   # Gallery styles
│   │   ├── profile.css   # Profile card styles
│   │   └── auth.css      # Authentication form styles
│   ├── javascripts/
│   │   └── navigation.js # Navigation functionality
│   └── images/           # Static images
├── package.json
└── README.md
```

## Dependencies

### Production Dependencies
```json
{
  "express": "~4.16.1",
  "passport": "^0.6.0",
  "express-session": "^1.17.0",
  "connect-flash": "^0.1.1",
  "cookie-parser": "~1.4.4",
  "morgan": "~1.9.1",
  "http-errors": "~1.6.3",
  "ejs": "~2.6.1"
}
```

## Key Features Explained

### 🔧 Navigation System
- **Desktop**: Horizontal navigation bar
- **Mobile**: Collapsible hamburger menu
- **Animation**: Smooth slide-in transitions
- **Responsive**: Adapts to screen size automatically

### 📸 Gallery Component
- **Masonry Layout**: Pinterest-style image grid
- **Responsive Columns**: 1-6 columns based on screen size
- **Hover Effects**: Image highlighting and shadows
- **Lazy Loading**: Optimized image loading

### 👤 User Profile Cards
- **Statistics Display**: User metrics with icons
- **Action Buttons**: Call-to-action buttons
- **Responsive Design**: Mobile-friendly layout
- **Modern Styling**: Clean, card-based design

### 🔐 Authentication Forms
- **Styled Inputs**: Custom input field styling
- **Validation**: Client and server-side validation
- **Error Handling**: User-friendly error messages
- **Social Login**: Prepared for Facebook/Google integration

## Customization

### Styling
- Modify CSS variables in each stylesheet
- Update color schemes in the `:root` selector
- Adjust breakpoints in media queries

### Authentication
- Configure Passport.js strategies in `users.js`
- Add social login providers
- Customize user model and validation

### Content
- Update EJS templates in the `views/` directory
- Modify routes in the `routes/` directory
- Add new pages and functionality

## Responsive Breakpoints

```css
/* Large screens */
@media (max-width: 1427px) { /* 5 columns */ }
@media (max-width: 1200px) { /* 4 columns */ }
@media (max-width: 1000px) { /* 3 columns, mobile nav */ }
@media (max-width: 786px)  { /* 2 columns */ }
@media (max-width: 480px)  { /* 1 column */ }
```

## Performance Optimizations

- **Static File Serving**: Optimized with Express static middleware
- **Session Management**: Secure session configuration
- **Image Optimization**: CSS object-fit for responsive images
- **Minification**: Ready for CSS/JS minification in production

## Security Features

- **Session Security**: Secure session configuration
- **CSRF Protection**: Ready for CSRF token implementation
- **Input Validation**: Server-side input validation
- **Error Handling**: Secure error page rendering

## Development Scripts

```bash
# Start development server
npm run dev

# Start production server
npm start

# Run tests
npm test

# Build for production
npm run build
```

## Deployment

### Environment Variables
```env
NODE_ENV=production
SESSION_SECRET=your-production-secret
PORT=3000
```

### Production Checklist
- [ ] Set secure session secret
- [ ] Enable HTTPS
- [ ] Configure reverse proxy (nginx)
- [ ] Set up process manager (PM2)
- [ ] Enable gzip compression
- [ ] Configure database connection
- [ ] Set up monitoring and logging

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Troubleshooting

### Common Issues

**Session not persisting:**
- Check session secret configuration
- Verify cookie settings
- Ensure session store is properly configured

**Responsive layout breaking:**
- Check CSS media queries
- Verify viewport meta tag
- Test flexbox/grid support

**Authentication not working:**
- Verify Passport.js configuration
- Check user model setup
- Ensure proper route protection

## Future Enhancements

- [ ] Add database integration (MongoDB/PostgreSQL)
- [ ] Implement social authentication
- [ ] Add user dashboard
- [ ] File upload functionality
- [ ] Real-time features with Socket.io
- [ ] API endpoints for mobile app
- [ ] Admin panel
- [ ] Email verification
- [ ] Password reset functionality

## License

MIT License - feel free to use this project for learning and development.

## Support

For questions and support, please open an issue in the repository or contact the development team.
