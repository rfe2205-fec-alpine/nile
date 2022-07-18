import React from 'react';
import TitleBar from './titlebar.jsx';
import AnnouncementBar from './announcementbar.jsx';

function TitleSection({ colorScheme }) {
  return (
    <div>
      <TitleBar colorScheme={colorScheme} />
      <AnnouncementBar colorScheme={colorScheme} />
    </div>
  );
}

export default TitleSection;
