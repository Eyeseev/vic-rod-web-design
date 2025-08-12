# Vic Rod Web Design - Component Library

A comprehensive, consistent component library built with React and TypeScript, following modern design principles and accessibility standards.

## 🎨 Design Principles

### Consistent Visual Patterns
- **Rounded Corners**: `rounded-lg` (12px) used consistently across all components
- **Subtle Shadows**: `shadow-md` with `hover:shadow-lg` transitions
- **Smooth Transitions**: `transition-all duration-250 ease-in-out` for all interactive elements
- **Color System**: Semantic color tokens with proper contrast ratios (WCAG AA compliant)
- **Typography**: Consistent font weights and sizes using CSS custom properties

### Component Architecture
- **Props-based Configuration**: Flexible props for titles, descriptions, and actions
- **TypeScript Interfaces**: Full type safety with comprehensive prop definitions
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **Responsive Design**: Mobile-first approach with responsive breakpoints

## 🧩 Core Components

### Button
Versatile button component with multiple variants, sizes, and states.

```tsx
import { Button } from './components';

<Button variant="primary" size="lg" onClick={handleClick}>
  Get Started
</Button>
```

**Variants**: `primary`, `secondary`, `accent`, `outline`, `ghost`, `success`, `warning`, `error`
**Sizes**: `sm`, `md`, `lg`, `xl`
**Features**: Icon support, full-width option, disabled state, loading state

### Card
Flexible container component with multiple visual styles and hover effects.

```tsx
import { Card } from './components';

<Card variant="elevated" padding="lg" interactive hoverEffect="lift">
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>
```

**Variants**: `default`, `elevated`, `featured`, `outlined`, `success`, `warning`, `error`
**Padding**: `none`, `sm`, `md`, `lg`, `xl`
**Hover Effects**: `none`, `lift`, `glow`, `border`

### Icon
Consistent icon system with standardized sizes and colors.

```tsx
import { Icon } from './components';

<Icon name="check" size="md" color="var(--success)" />
```

**Sizes**: `xs`, `sm`, `md`, `lg`, `xl`
**Colors**: CSS custom properties or hex values
**Icon Names**: Comprehensive icon library (check, arrow-right, etc.)

## 🎯 Feature Components

### ServiceCard
Specialized card for displaying service information with icons and CTAs.

```tsx
import { ServiceCard } from './components';

<ServiceCard
  title="Web Design"
  description="Custom websites that convert visitors into customers"
  icon="design"
  features={["Responsive Design", "SEO Optimized", "Fast Loading"]}
  ctaText="Learn More"
  ctaAction={() => navigate('/services')}
/>
```

### PricingCard
Pricing tier component with feature lists and call-to-action buttons.

```tsx
import { PricingCard } from './components';

<PricingCard
  title="Professional"
  price="$99"
  period="/month"
  description="Perfect for growing businesses"
  features={["5 Pages", "SEO Setup", "Analytics", "Support"]}
  ctaText="Choose Plan"
  ctaAction={() => selectPlan('professional')}
  featured={true}
  popular={true}
/>
```

### TestimonialCard
Customer testimonial display with avatar, quote, and attribution.

```tsx
import { TestimonialCard } from './components';

<TestimonialCard
  quote="Vic Rod transformed our online presence completely!"
  author="Sarah Johnson"
  company="TechStart Inc"
  avatar="/avatars/sarah.jpg"
  rating={5}
/>
```

## 🔧 Interactive Components

### Modal
Overlay dialog component with backdrop and close functionality.

```tsx
import { Modal } from './components';

<Modal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  title="Contact Form"
  size="lg"
>
  <ContactForm onSubmit={handleSubmit} />
</Modal>
```

**Sizes**: `sm`, `md`, `lg`, `xl`
**Features**: Backdrop click to close, keyboard navigation, body scroll lock

### Tooltip
Contextual information display on hover/focus.

```tsx
import { Tooltip } from './components';

<Tooltip content="Click to save your changes" position="top">
  <Button>Save</Button>
</Tooltip>
```

**Positions**: `top`, `bottom`, `left`, `right`
**Features**: Configurable delay, smooth animations, arrow indicators

### Alert
Notification component with different types and close functionality.

```tsx
import { Alert } from './components';

<Alert
  type="success"
  title="Success!"
  onClose={() => setShowAlert(false)}
>
  Your changes have been saved successfully.
</Alert>
```

**Types**: `info`, `success`, `warning`, `error`
**Features**: Auto-dismiss, close button, icon indicators

### ProgressBar
Visual progress indicator with multiple variants and label options.

```tsx
import { ProgressBar } from './components';

<ProgressBar
  value={75}
  max={100}
  variant="success"
  size="lg"
  showLabel={true}
  labelPosition="top"
  animated={true}
/>
```

**Variants**: `primary`, `success`, `warning`, `error`, `accent`
**Sizes**: `sm`, `md`, `lg`
**Label Positions**: `top`, `bottom`, `left`, `right`

## 🎨 Form Components

### FormField
Consistent form input wrapper with labels and validation states.

```tsx
import { FormField } from './components';

<FormField
  label="Email Address"
  required={true}
  error="Please enter a valid email address"
>
  <input
    type="email"
    className="form-input"
    placeholder="Enter your email"
  />
</FormField>
```

**Features**: Required field indicators, error states, help text, validation

### ContactSection
Complete contact form section with form handling and validation.

```tsx
import { ContactSection } from './components';

<ContactSection
  title="Get In Touch"
  description="Ready to start your project? Let's talk!"
  onSubmit={handleContactSubmit}
  successMessage="Thank you! We'll be in touch soon."
/>
```

## 📱 Responsive Design

All components are built with mobile-first responsive design:

- **Breakpoints**: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- **Grid System**: Flexible grid layouts that adapt to screen sizes
- **Touch Targets**: Minimum 44px touch targets for mobile devices
- **Spacing**: Consistent spacing scale using CSS custom properties

## ♿ Accessibility Features

- **ARIA Labels**: Proper labeling for screen readers
- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Focus Management**: Visible focus indicators and logical tab order
- **Color Contrast**: WCAG AA compliant color combinations
- **Semantic HTML**: Proper HTML structure and landmarks

## 🎯 Usage Guidelines

### Naming Conventions
- Components use PascalCase: `Button`, `ServiceCard`, `PricingCard`
- Props use camelCase: `ctaText`, `onClick`, `className`
- CSS classes use kebab-case: `rounded-lg`, `shadow-md`

### Import Patterns
```tsx
// Import individual components
import { Button, Card, Icon } from './components';

// Import specific components
import Button from './components/Button';
```

### Styling Approach
- Use CSS custom properties for consistent theming
- Leverage utility classes for layout and spacing
- Maintain component encapsulation with scoped styles
- Follow the established design token system

## 🚀 Getting Started

1. **Install Dependencies**: Ensure React and TypeScript are set up
2. **Import Components**: Use the barrel export from `./components`
3. **Customize Theme**: Modify CSS custom properties in `styles.css`
4. **Build Pages**: Compose components to create consistent layouts

## 🔧 Customization

### Theme Variables
Modify the root CSS variables in `styles.css`:

```css
:root {
  --primary: #1f45b5;
  --radius: 12px;
  --transition-normal: 250ms ease-in-out;
}
```

### Component Variants
Extend existing components by adding new variants:

```tsx
const variantClasses = {
  // ... existing variants
  custom: 'bg-custom text-white hover:bg-custom-light',
};
```

## 📚 Component Showcase

Use the `ComponentShowcase` component to display all available components:

```tsx
import { ComponentShowcase } from './components';

<ComponentShowcase />
```

This provides a comprehensive view of all components with their variants and usage examples.

---

*Built with ❤️ by Vic Rod Web Design - A consistent, accessible, and beautiful component library.*
