# edu-gomoku-components

> We reorganize the structure so that components are under .src/components as directories with index.js, Component.jsx and component.css.

## Instructions

```bash
cd ~
cd ws
cd gomoku-components
mkdir -p ./src/components
mkdir ./src/components/Button
mkdir ./src/components/Header
mkdir ./src/components/Page
mv ./stories/Button.jsx ./src/components/Button/
mv ./stories/button.css ./src/components/Button/
touch ./src/components/Button/index.js
mv ./stories/Header.jsx ./src/components/Header/
mv ./stories/header.css ./src/components/Header/
touch ./src/components/Header/index.js
mv ./stories/Page.jsx ./src/components/Page/
mv ./stories/page.css ./src/components/Page/
touch ./src/components/Page/index.js
mv ./stories ./src/stories
```

## ./.storybook/main.js

```bash
cat > ./.storybook/main.js  << EOF
/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: [
    "../src/stories/**/*.mdx",
    "../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
EOF
```

## ./src/components/Button/index.j

```bash
cat > ./src/components/Button/index.js << EOF
//for bundling
export {default as Button} from "./Button"

//for storybook
export {default} from "./Button"
EOF
```

## ./src/components/Header/index.js

```bash
cat > ./src/components/Header/index.js << EOF
//for bundling
export {default as Header} from "./Header"

//for storybook
export {default} from "./Header"
EOF
```

## ./src/components/Page/index.js

```bash
cat > ./src/components/Page/index.js << EOF
//for bundling
export {default as Page} from "./Page"

//for storybook
export {default} from "./Page"
EOF
```

## ./src/components/Button/Button.jsx

```bash
cat > ./src/components/Button/Button.jsx << EOF
import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */

const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};

export default Button;
EOF
```

## ./src/components/Header/Header.jsx

```bash
cat > ./src/components/Header/Header.jsx << EOF
import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import './header.css';

const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header>
    <div className="storybook-header">
      <div>
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path
              d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
              fill="#FFF"
            />
            <path
              d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
              fill="#555AB9"
            />
            <path
              d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
              fill="#91BAF8"
            />
          </g>
        </svg>
        <h1>Acme</h1>
      </div>
      <div>
        {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button size="small" onClick={onLogout} label="Log out" />
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>
    </div>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};

export default Header;
EOF
```

## ./src/components/Page/Page.jsx

```bash
cat > ./src/components/Page/Page.jsx << EOF
import React from 'react';

import Header from '../Header/Header';
import './page.css';

const Page = () => {
  const [user, setUser] = React.useState();

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />

      <section className="storybook-page">
        <h2>Pages in Storybook</h2>
        <p>
          We recommend building UIs with a{' '}
          <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer">
            <strong>component-driven</strong>
          </a>{' '}
          process starting with atomic components and ending with pages.
        </p>
        <p>
          Render pages with mock data. This makes it easy to build and review page states without
          needing to navigate to them in your app. Here are some handy patterns for managing page
          data in Storybook:
        </p>
        <ul>
          <li>
            Use a higher-level connected component. Storybook helps you compose such data from the
            "args" of child component stories
          </li>
          <li>
            Assemble data in the page component from your services. You can mock these services out
            using Storybook.
          </li>
        </ul>
        <p>
          Get a guided tutorial on component-driven development at{' '}
          <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer">
            Storybook tutorials
          </a>
          . Read more in the{' '}
          <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer">
            docs
          </a>
          .
        </p>
        <div className="tip-wrapper">
          <span className="tip">Tip</span> Adjust the width of the canvas with the{' '}
          <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <path
                d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
                id="a"
                fill="#999"
              />
            </g>
          </svg>
          Viewports addon in the toolbar
        </div>
      </section>
    </article>
  );
};

export default Page;
EOF
```

## ./src/stories/Button.stories.js

```bash
cat > ./src/stories/Button.stories.js << EOF
import { Button } from '../components/Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};


// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};


export const Secondary = {
  args: {
    label: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

EOF
```

## ./src/stories/Header.stories.js

```bash
cat > ./src/stories/Header.stories.js << EOF
import { Header } from '../components/Header';

export default {
  title: 'Example/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export const LoggedIn = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
};

export const LoggedOut = {};

EOF
```

## ./src/stories/Page.stories.js

```bash
cat > ./src/stories/Page.stories.js << EOF
import { within, userEvent } from '@storybook/testing-library';

import { Page } from '../components/Page';

export default {
  title: 'Example/Page',
  component: Page,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export const LoggedOut = {};

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const LoggedIn = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = await canvas.getByRole('button', {
      name: /Log in/i,
    });
    await userEvent.click(loginButton);
  },
};

EOF
```

## Restart storybook

```bash
npm run storybook
```
