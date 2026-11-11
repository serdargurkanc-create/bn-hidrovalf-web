import { BrandMark, brandMarks } from "@/components/home/BrandMarks";

const stats = [
  { value: "20+", label: "Yıl atölye tecrübesi" },
  { value: "Her marka", label: "İş makinası valf ve pompa" },
  { value: "Videolu", label: "Test kaydı ile teslim" },
  { value: "İvedik OSB", label: "Ankara, tek atölye" },
];

export function Facts() {
  // Sonsuz kaydırma için iki kez tekrarla
  const loop = [...brandMarks, ...brandMarks];
  return (
    <>
      <div className="ribbon" aria-label="İşlediğimiz markalar" role="img">
        <div className="marquee">
          <div className="marquee-track marquee-brands">
            {loop.map((m, i) => (
              <BrandMark key={`${m.slug}-${i}`} mark={m} />
            ))}
          </div>
        </div>
      </div>
      <section className="stats" aria-label="Çalışma olguları">
        <div className="wrap stats-grid">
          {stats.map((s, i) => (
            <div className="stat rv" style={{ ["--d" as string]: `${i * 90}ms` }} key={s.label}>
              <b>{s.value}</b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
