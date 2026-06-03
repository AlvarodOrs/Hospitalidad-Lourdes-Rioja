import themes from "@/lib/content/themes.json";

export function usePageTheme(page: string) {
  return themes.themes[page as keyof typeof themes.themes];
}