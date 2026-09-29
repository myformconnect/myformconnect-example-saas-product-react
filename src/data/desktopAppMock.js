export const desktopAppMock = {
  activeProfile: 'Everyday Desktop',
  status: 'Ready',
  workspaces: [
    { id: 'work', name: 'Work', count: 12, active: true, icon: 'briefcase' },
    { id: 'study', name: 'Study', count: 8, active: false, icon: 'book' },
    { id: 'personal', name: 'Personal', count: 6, active: false, icon: 'user' },
    { id: 'creative', name: 'Creative', count: 9, active: false, icon: 'palette' },
  ],
  quickAccess: [
    { id: 'qa-1', name: 'Documents', icon: 'folder', type: 'Folder' },
    { id: 'qa-2', name: 'Downloads', icon: 'folderDown', type: 'Folder' },
    { id: 'qa-3', name: 'Chrome', icon: 'globe', type: 'App' },
    { id: 'qa-4', name: 'Email', icon: 'mail', type: 'App' },
    { id: 'qa-5', name: 'Calendar', icon: 'calendar', type: 'App' },
    { id: 'qa-6', name: 'Music', icon: 'music', type: 'App' },
  ],
  recentItems: [
    { id: 'rec-1', name: 'Project proposal.pdf', type: 'PDF Document', size: '2.4 MB', time: '10m ago' },
    { id: 'rec-2', name: 'Holiday photos', type: 'Photo Folder', size: '48 items', time: '1h ago' },
    { id: 'rec-3', name: 'Budget.xlsx', type: 'Spreadsheet', size: '340 KB', time: 'Yesterday' },
  ],
  routines: [
    {
      id: 'rt-1',
      title: 'Morning setup',
      actions: 'Opens Email, Calendar, and To-Do list',
      badge: '3 apps',
      hotkey: '⌘1',
    },
    {
      id: 'rt-2',
      title: 'Work mode',
      actions: 'Opens Work workspace and focus timer',
      badge: '2 items',
      hotkey: '⌘2',
    },
    {
      id: 'rt-3',
      title: 'End of day',
      actions: 'Closes active projects and cleans downloads',
      badge: 'Clean up',
      hotkey: '⌘3',
    },
  ],
  clipboardItems: [
    { id: 'cb-1', content: 'https://meet.google.com/abc-xyz-123', label: 'Meeting link', time: '5m ago' },
    { id: 'cb-2', content: '742 Evergreen Terrace, Springfield', label: 'Delivery address', time: '20m ago' },
    { id: 'cb-3', content: 'Don\'t forget to send the updated slide deck before 3 PM', label: 'Quick note', time: '1h ago' },
    { id: 'cb-4', content: 'hello@orevioapp.example', label: 'Email address', time: '2h ago' },
  ],
};
