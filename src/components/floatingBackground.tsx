export default function FloatingBackground() {
  const bubbles = Array.from({ length: 20 }) // 20 bulles pour couvrir l'écran

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {bubbles.map((_, i) => {
        const size = 30 + Math.random() * 60 // taille 30px → 90px

        // positions aléatoires larges pour éviter qu'elles se collent
        const left = Math.random() * 90 + 5  // 5% → 95%
        const top = Math.random() * 90 + 5   // 5% → 95%

        return (
          <div
            key={i}
            className="absolute rounded-full bg-red-200 opacity-40 animate-float"
            style={{
              width: `${size}px`,
              height: `${size}px`,  // largeur = hauteur → cercle parfait
              left: `${left}%`,
              top: `${top}%`,
              animationDuration: `${6 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        )
      })}
    </div>
  )
}
