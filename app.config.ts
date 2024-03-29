export default defineAppConfig({
  instagram: {
    enabled: false
  },
  socials: {
    instagram: {
      name: 'Instagram',
      url: 'https://www.instagram.com/harmonics.be/',
      icon: 'i-mdi-instagram'
    },
    whatsapp: {
      name: 'WhatsApp',
      url: 'https://wa.me/+32473344656',
      icon: 'i-mdi-whatsapp'
    }
  },
  mailchimpLink: 'https://harmonics.us14.list-manage.com/subscribe?u=70b20f90b742c102a6d56ec9c&id=7e4d7c55a7',
  ui: {
    primary: 'avocado',
    gray: 'neutral',
    badge: {
      base: 'mr-2 mb-2 inline-flex items-center hover:rounded-2xl',
      rounded: 'rounded-xl'
    },
    button: {
      default: {
        variant: 'soft'
      },
      base: 'mr-2 mb-2 no-underline border-b-0 focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 hover:rounded-2xl transition-all duration-300 harmonicButton',
      rounded: 'rounded-xl',
      size: {
        '2xl': 'text-xl'
      },
      gap: {
        '2xl': 'gap-x-2'
      },
      padding: {
        '2xl': 'flex justify-center place-items-center py-3 sm:py-4 px-1 sm:p-5 '
      }
    },
    card: {
      base: 'overflow-hidden hover:rounded-2xl',
      background: 'bg-avocado-100 dark:bg-avocado-900 !bg-opacity-20 transition-all',
      rounded: 'rounded-xl',
      shadow: 'shadow-sm',
      header: {
        base: 'overflow-hidden',
        padding: 'p-0'
      }
    },
    dropdown: {
      rounded: 'rounded-xl'
    }
  }
})
