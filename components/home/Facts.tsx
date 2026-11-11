const chips = [
  "Valf revizyonu",
  "Spool imalatı",
  "Arıza çözümü",
  "Valf testi",
  "Pompa revizyonu",
  "İç grup yüzey taşlama",
  "Pompa testi",
  "Videolu test kaydı",
  "CNC ve özel imalat",
  "Yedek parça",
];

const stats = [
  { value: "20+", label: "Yıl atölye tecrübesi" },
  { value: "Her marka", label: "İş makinası valf ve pompa" },
  { value: "Videolu", label: "Test kaydı ile teslim" },
  { value: "İvedik OSB", label: "Ankara, tek atölye" },
];

export function Facts() {
  const loop = [...chips, ...chips];
  return (
    <>
      <div className="ribbon" aria-hidden="true">
        <div className="marquee">
          <div className="marquee-track">
            {loop.map((item, i) => (
              <span key={`${item}-${i}`}>{item}</span>
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
