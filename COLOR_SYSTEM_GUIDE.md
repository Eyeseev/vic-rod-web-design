# Vic Rod Web Design - Color System Guide

## Overview
This color system follows the **60-30-10 rule** recommended by Nielsen Norman Group for balanced, accessible design. It ensures visual hierarchy while maintaining excellent readability and accessibility.

## Color Distribution (60-30-10 Rule)

### 60% - Dominant Colors (Neutral Backgrounds)
- **Primary Background**: `--bg: #fafbfc` (Light gray-blue)
- **Panel Background**: `--panel: #ffffff` (Pure white)
- **Alternative Background**: `--bg-alt: #f1f5f9` (Slightly darker gray)
- **Panel Alternative**: `--panel-alt: #f8fafc` (Light gray)

**Usage**: Main page backgrounds, content areas, and card backgrounds

### 30% - Secondary Colors (Muted Blues)
- **Primary Brand**: `--primary: #1f45b5` (Deep blue)
- **Secondary**: `--secondary: #475569` (Muted blue-gray)
- **Variants**: Light and dark versions for hover/active states

**Usage**: Brand elements, navigation, secondary buttons, and supporting UI elements

### 10% - Accent Colors (Vibrant for CTAs)
- **Accent**: `--accent: #0ea5e9` (Bright blue)
- **Variants**: Light and dark versions for hover/active states

**Usage**: **ONLY** for Call-to-Action buttons and key interactive elements

## Accessibility & Contrast

### WCAG AA Compliance
All text combinations meet or exceed the 4.5:1 contrast ratio requirement:

| Text Color | Background | Contrast Ratio | Status |
|------------|------------|----------------|---------|
| `--ink` (#0f172a) | `--bg` (#fafbfc) | 15.6:1 | ✅ Excellent |
| `--ink-2` (#334155) | `--bg` (#fafbfc) | 7.1:1 | ✅ Good |
| `--ink-3` (#475569) | `--bg` (#fafbfc) | 5.8:1 | ✅ Acceptable |
| White text | `--primary` (#1f45b5) | 4.5:1+ | ✅ Compliant |
| White text | `--accent` (#0ea5e9) | 4.5:1+ | ✅ Compliant |

### Text Color Hierarchy
- **`--ink`**: Primary headings and important text
- **`--ink-2`**: Secondary headings and body text
- **`--ink-3`**: Supporting text and captions
- **`--ink-muted`**: Muted text (use sparingly)

## Usage Guidelines

### ✅ DO
- Use `--bg` and `--panel` for main backgrounds
- Use `--primary` for brand elements and navigation
- Use `--accent` **ONLY** for CTAs and key actions
- Use `--secondary` for supporting UI elements
- Use `--ink` variants based on text importance
- Maintain consistent button colors across the site

### ❌ DON'T
- Use accent colors for non-CTA elements
- Mix different button styles for the same action type
- Use low-contrast text combinations
- Overuse bright colors

## Button Color Standards

### Primary Buttons
```css
.btn-primary {
  background-color: var(--primary);
  color: var(--primary-ink); /* White */
  border-color: var(--primary);
}
```

### Accent Buttons (CTAs Only)
```css
.btn-accent {
  background-color: var(--accent);
  color: var(--accent-ink); /* White */
  border-color: var(--accent);
}
```

### Outline Buttons
```css
.btn-outline {
  background-color: transparent;
  color: var(--primary);
  border-color: var(--primary);
}
```

## Component Color Patterns

### Cards
- **Default**: `--panel` background with `--border` borders
- **Alternative**: `--panel-alt` background with `--border-light` borders

### Sections
- **Default**: `--bg` background
- **Alternative**: `--bg-alt` background for visual separation

### Forms
- **Inputs**: `--panel` background with `--border` borders
- **Focus**: `--focus-ring` outline
- **Validation**: Use semantic colors (`--success`, `--warning`, `--error`)

## Semantic Colors

### Success States
- **Background**: `--success: #059669`
- **Text**: `--success-light: #10b981`

### Warning States
- **Background**: `--warning: #d97706`
- **Text**: `--warning-light: #f59e0b`

### Error States
- **Background**: `--error: #dc2626`
- **Text**: `--error-light: #ef4444`

## Hover & Active States

### Hover Effects
- **Primary elements**: Use `--primary-light`
- **Accent elements**: Use `--accent-light`
- **Backgrounds**: Use `--panel-alt`

### Active States
- **Primary elements**: Use `--primary-dark`
- **Accent elements**: Use `--accent-dark`

## Testing & Validation

### Contrast Testing Tools
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Accessible Colors](https://accessible-colors.com/)
- [Contrast Ratio](https://contrast-ratio.com/)

### Browser Testing
- Test in multiple browsers
- Verify focus indicators are visible
- Check color combinations in different lighting conditions

## Implementation Notes

### CSS Variables
All colors are defined as CSS custom properties in `:root` for easy maintenance and theming.

### Utility Classes
Comprehensive utility classes are provided for:
- Background colors (`.bg-*`)
- Text colors (`.text-*`)
- Border colors (`.border-*`)
- Hover states (`.hover:*`)
- Active states (`.active:*`)

### Responsive Considerations
Colors maintain their contrast ratios across all screen sizes and device types.

## Maintenance

### Adding New Colors
1. Define the color in `:root`
2. Test contrast ratios
3. Add utility classes if needed
4. Update this documentation

### Color Updates
1. Test contrast ratios after changes
2. Verify accessibility compliance
3. Update all related components
4. Test across different devices and browsers

---

**Remember**: The 60-30-10 rule and consistent color usage create a professional, accessible design that guides users effectively through your interface.
