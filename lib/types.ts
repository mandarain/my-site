export interface ContentItem {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags?: string[];
  cover?: string;
  content: string;
}

export interface WorkItem extends ContentItem {
  role?: string;
  url?: string;
}

export interface BlogItem extends ContentItem {
  readingTime?: string;
}
