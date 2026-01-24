/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: theme('colors.slate.700'),
            fontSize: '1.125rem',
            lineHeight: '1.8',
            
            // Headings
            h2: {
              color: theme('colors.slate.900'),
              fontWeight: '700',
              fontSize: '1.875rem',
              marginTop: '4rem',
              marginBottom: '1.5rem',
              paddingBottom: '0.75rem',
              borderBottom: `1px solid ${theme('colors.slate.200')}`,
            },
            h3: {
              color: theme('colors.cyan.700'),
              fontWeight: '700',
              fontSize: '1.5rem',
              marginTop: '2.5rem',
              marginBottom: '1rem',
            },
            h4: {
              color: theme('colors.slate.800'),
              fontWeight: '600',
              fontSize: '1.25rem',
              marginTop: '2rem',
              marginBottom: '0.75rem',
            },
            
            // Paragraphs
            p: {
              marginBottom: '1.5rem',
              textAlign: 'justify',
            },
            
            // Links
            a: {
              color: theme('colors.cyan.600'),
              textDecoration: 'none',
              fontWeight: '600',
              '&:hover': {
                color: theme('colors.cyan.700'),
                textDecoration: 'underline',
              },
            },
            
            // Strong
            strong: {
              color: theme('colors.slate.900'),
              fontWeight: '700',
            },
            
            // Lists
            ul: {
              listStyleType: 'none',
              paddingLeft: '0',
            },
            'ul > li': {
              position: 'relative',
              paddingLeft: '1.75rem',
              '&::before': {
                content: '"✓"',
                position: 'absolute',
                left: '0',
                color: theme('colors.cyan.600'),
                fontWeight: '700',
              },
            },
            ol: {
              paddingLeft: '0',
            },
            'ol > li': {
              paddingLeft: '2rem',
            },
            
            // Code
            code: {
              color: theme('colors.cyan.700'),
              backgroundColor: theme('colors.cyan.50'),
              paddingLeft: '0.5rem',
              paddingRight: '0.5rem',
              paddingTop: '0.25rem',
              paddingBottom: '0.25rem',
              borderRadius: '0.25rem',
              fontWeight: '600',
              '&::before': {
                content: '""',
              },
              '&::after': {
                content: '""',
              },
            },
            
            // Code blocks
            pre: {
              backgroundColor: theme('colors.slate.900'),
              color: theme('colors.slate.100'),
              borderRadius: '0.75rem',
              padding: '1.5rem',
            },
            'pre code': {
              backgroundColor: 'transparent',
              color: 'inherit',
              padding: '0',
            },
            
            // Blockquotes
            blockquote: {
              borderLeftColor: theme('colors.cyan.500'),
              borderLeftWidth: '4px',
              backgroundColor: theme('colors.cyan.50'),
              paddingLeft: '1.5rem',
              paddingRight: '1.5rem',
              paddingTop: '1rem',
              paddingBottom: '1rem',
              borderTopRightRadius: '0.5rem',
              borderBottomRightRadius: '0.5rem',
              fontStyle: 'italic',
            },
            
            // Images
            img: {
              borderRadius: '0.75rem',
              boxShadow: theme('boxShadow.lg'),
              border: `1px solid ${theme('colors.slate.200')}`,
            },
            
            // Tables
            table: {
              width: '100%',
              borderCollapse: 'separate',
              borderSpacing: '0',
              border: `1px solid ${theme('colors.slate.200')}`,
              borderRadius: '0.5rem',
              overflow: 'hidden',
            },
            thead: {
              backgroundColor: theme('colors.slate.100'),
              borderBottom: `2px solid ${theme('colors.slate.300')}`,
            },
            'thead th': {
              padding: '0.75rem 1rem',
              textAlign: 'left',
              fontWeight: '700',
              fontSize: '0.875rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            },
            'tbody td': {
              padding: '0.75rem 1rem',
              borderTop: `1px solid ${theme('colors.slate.200')}`,
            },
            'tbody tr:hover': {
              backgroundColor: theme('colors.slate.50'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}