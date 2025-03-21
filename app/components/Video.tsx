export function Video() {
    return (
      <div className="aspect-video w-full max-w-lg rounded-lg overflow-hidden shadow-lg">
        <iframe 
          className="w-full h-full"
          src="https://www.youtube.com/embed/8rSH8-pbHZ0" 
          title="Video" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    )
  }