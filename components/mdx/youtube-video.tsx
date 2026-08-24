import { YoutubeIcon } from "@/components/youtube-icon";

export function YouTubeVideo({ id, title }: { id: string; title?: string }) {
  return (
    <figure className="my-8 not-prose">
      <div className="aspect-video overflow-hidden rounded-xl border bg-black shadow-sm">
        <iframe
          className="size-full"
          src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?rel=0`}
          title={title ? `${title} — video tutorial` : "YouTube video tutorial"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
      <figcaption className="mt-2.5 flex items-center gap-2 text-sm text-muted-foreground">
        <YoutubeIcon className="size-4 text-red-600 dark:text-red-400" />
        Watch the video tutorial on YouTube
      </figcaption>
    </figure>
  );
}
