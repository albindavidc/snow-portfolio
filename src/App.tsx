/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Hero } from './components/Hero';
import { Content } from './components/Content';
import { ThemeProvider } from './components/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Hero />
        <Content />
      </div>
    </ThemeProvider>
  );
}
