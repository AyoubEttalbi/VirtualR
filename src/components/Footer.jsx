import React from 'react';
import { communityLinks, resourcesLinks, platformLinks } from '../constants';

export default function Footer() {
  return (
    <footer className="mt-20 py-10 border-t border-neutral-700">
      <div className="max-w-screen-lg mx-auto grid grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h3 className="my-5 text-md font-semibold">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a className="text-neutral-300 hover:text-white" href={link.href}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="my-5 text-md font-semibold">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a className="text-neutral-300 hover:text-white" href={link.href}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="my-5 text-md font-semibold">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a className="text-neutral-300 hover:text-white" href={link.href}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
