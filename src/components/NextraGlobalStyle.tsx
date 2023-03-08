import { createGlobalStyle } from 'styled-components';

export const NextraGlobalStyle = createGlobalStyle`
  html[style="color-scheme: light;"] {
    body {
      background: ${({ theme }) => theme.colors.neutral.white} !important;
    }

    footer hr {
      background: ${({ theme }) => theme.colors.gray.gr100} !important;
    }

    footer span {
      font-size: 0.875rem !important;
      color: #4B5563 !important;
    }

    footer a:hover {
      color: #1F2937 !important;
    }

    footer, input[type='search'], ul[role='listbox'], button[data-headlessui-state='open'] {
      background: ${({ theme }) => theme.colors.gray.gr050} !important;
    }

    input[type='search'], ul[role='listbox'] {
      border: 1px solid ${({ theme }) => theme.colors.gray.gr100} !important;
    }
  }

  html[style="color-scheme: dark;"] {
    body {
      background: ${({ theme }) => theme.colors.neutral.black} !important;
    }

    footer hr {
      background: ${({ theme }) => theme.colors.gray.gr800} !important;
    }

    footer span {
      font-size: 0.875rem !important;
      color: #9CA3AF !important;
    }

    footer a:hover {
      color: #E5E7EB !important;
    }

    footer, input[type='search'], ul[role='listbox'], button[data-headlessui-state='open'] {
      background: ${({ theme }) => theme.colors.gray.gr900} !important;
    }

    input[type='search'], ul[role='listbox'] {
      border: 1px solid ${({ theme }) => theme.colors.gray.gr800} !important;
    }
  }

  ul[role='listbox'] {
    box-shadow: none !important;

    li[data-headlessui-state='active'] {
      color: ${({ theme }) => theme.colors.brand.tertiary} !important;
      background: none !important;
    }
  }

  @supports ((-webkit-backdrop-filter:blur(1px)) or ((-webkit-backdrop-filter: blur(1px)) or (backdrop-filter: blur(1px)))) {
    .nextra-nav-container-blur {
      background: rgba(255,255,255,.5) !important;
      backdrop-filter: saturate(180%) blur(5px) !important;
    }

    html[class~=dark] .nextra-nav-container-blur {
      background: rgba(0,0,0,.5) !important;
      backdrop-filter: saturate(180%) blur(5px) !important;
    }
  }

  .nextra-nav-container-blur {
    border-bottom: 1px solid ${({ theme }) =>
      theme.colors.gray.gr100} !important;
    box-shadow: none !important;
  }

  .dark .nextra-nav-container-blur {
    border-bottom: 1px solid ${({ theme }) =>
      theme.colors.gray.gr800} !important;
  }

  .nextra-sidebar-container ul li.active  a {
    color: ${({ theme }) => theme.colors.brand.secondary} !important;
    background: ${({ theme }) => theme.colors.brand.tertiary} !important;
  }

  .nextra-sidebar-container div:last-child {
    border-color: ${({ theme }) => theme.colors.gray.gr100} !important;
    background: none !important;
    box-shadow: none !important;
  }

  .dark .nextra-sidebar-container div:last-child {
    border-color: ${({ theme }) => theme.colors.gray.gr800} !important;
  }

  .nextra-search .nextra-scrollbar {
    border-color: ${({ theme }) => theme.colors.gray.gr100} !important;
    background: ${({ theme }) => theme.colors.gray.gr050} !important;

    div:first-child {
      border-color: ${({ theme }) => theme.colors.gray.gr100} !important;
    }
  }

  .dark .nextra-search .nextra-scrollbar {
    border-color: ${({ theme }) => theme.colors.gray.gr800} !important;
    background: ${({ theme }) => theme.colors.gray.gr900} !important;

    div:first-child {
      border-color: ${({ theme }) => theme.colors.gray.gr800} !important;
    }
  }

  .nextra-sidebar-container {
    background: ${({ theme }) => theme.colors.neutral.white} !important;
  }

  .dark .nextra-sidebar-container {
    background: ${({ theme }) => theme.colors.neutral.black} !important;
  }

  @media (min-width: 768px) {
    .nextra-sidebar-container {
      background: none !important;
    }
  }

  .nx-text-primary-600 {
    color: ${({ theme }) => theme.colors.brand.tertiary} !important;
  }

  .nx-bg-primary-500\\\/10 {
    background: ${({ theme }) => theme.colors.primary.pr100} !important;
  }

  .dark .nx-bg-primary-500\\\/10 {
    background: ${({ theme }) => theme.colors.primary.pr800} !important;
  }
`;
