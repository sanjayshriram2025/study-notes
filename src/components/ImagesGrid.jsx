const ImagesGrid = ({ images, title }) => {
  if (!images || images.length === 0) return null;

  return (
    <div style={{
      marginTop: "32px",
      background: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: "20px",
      padding: "24px"
    }}>
      <h3 style={{
        color: "white", fontWeight: "800",
        fontSize: "20px", marginBottom: "20px",
        display: "flex", alignItems: "center", gap: "10px"
      }}>
        🖼️ Related Images
        <span style={{
          background: "linear-gradient(135deg, #667eea, #764ba2)",
          padding: "2px 12px", borderRadius: "20px",
          fontSize: "13px", fontWeight: "600", color: "white"
        }}>
          {images.length} images
        </span>
      </h3>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "12px"
      }}>
        {images.map((image, i) => (
          <div
            key={i}
            onClick={() => window.open(image, "_blank")}
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              cursor: "pointer",
              transition: "transform 0.2s",
              border: "1px solid rgba(255,255,255,0.1)",
              aspectRatio: "1",
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          >
            <img
              src={image}
              alt={title + " image " + (i + 1)}
              style={{
                width: "100%", height: "100%",
                objectFit: "cover", display: "block"
              }}
              onError={e => e.currentTarget.parentElement.style.display = "none"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagesGrid;