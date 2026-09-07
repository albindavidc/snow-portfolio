/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Hero } from './components/Hero';
import { Content } from './components/Content';

export default function App() {
  return (
    <div className="min-h-screen bg-[#010102] selection:bg-[var(--color-brand)] selection:text-black">
      <Hero />
      <Content />
    </div>
  );
}
