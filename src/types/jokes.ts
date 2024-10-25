export interface Joke {
  error: boolean;
  category: string;
  type: string;
  setup: string;
  delivery: string;
  flags: Flags;
  id: number;
  safe: false;
  lang: string;
  joke?: string;
}

export interface Flags {
  nsfw: boolean;
  religious: false;
  political: false;
  racist: false;
  sexist: false;
  explicit: true;
}
