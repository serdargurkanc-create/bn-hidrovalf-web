import Link from "next/link";

/**
 * GA4 ve Search Console kimlikleri yalnızca ortam değişkeninden okunur.
 * Tanımsızsa bu bileşen boş döner. GA, çerez onayı (localStorage bn-consent)
 * verilmeden yüklenmez.
 */
export function ConsentAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  if (!gaId) return null;

  const boot = `(function(){var id=${JSON.stringify(gaId)};var key="bn-consent";function load(){if(window.__bnGa)return;window.__bnGa=1;var s=document.createElement("script");s.async=true;s.src="https://www.googletagmanager.com/gtag/js?id="+encodeURIComponent(id);document.head.appendChild(s);window.dataLayer=window.dataLayer||[];function gtag(){window.dataLayer.push(arguments);}window.gtag=gtag;gtag("js",new Date());gtag("config",id,{anonymize_ip:true});}var v=null;try{v=localStorage.getItem(key);}catch(e){}if(v==="ok"){load();return;}if(v==="no")return;var bar=document.querySelector("[data-cookie-bar]");if(!bar)return;bar.hidden=false;var ok=bar.querySelector("[data-cookie-accept]");var no=bar.querySelector("[data-cookie-reject]");if(ok)ok.addEventListener("click",function(){try{localStorage.setItem(key,"ok");}catch(e){}bar.hidden=true;load();});if(no)no.addEventListener("click",function(){try{localStorage.setItem(key,"no");}catch(e){}bar.hidden=true;});})();`;

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            ".cookie-bar{position:fixed;z-index:40;left:.75rem;right:.75rem;bottom:.75rem;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:.75rem 1rem;padding:.85rem 1rem;background:#fff;border:1px solid #ebe6de;border-radius:16px;box-shadow:0 18px 40px rgba(26,22,18,.1)}.cookie-bar[hidden]{display:none}.cookie-bar p{margin:0;color:#1a1612;font-size:.92rem;max-width:42rem}.cookie-bar a{color:#8a4a12;font-weight:700}.cookie-actions{display:flex;gap:.5rem}.cookie-actions button{min-height:44px}@media(max-width:799px){.cookie-bar{bottom:5.25rem}}",
        }}
      />
      <div className="cookie-bar" data-cookie-bar hidden>
        <p>
          Ölçüm çerezleri yalnızca onayınızla yüklenir.{" "}
          <Link href="/cerez-politikasi">Çerez politikası</Link>
        </p>
        <div className="cookie-actions">
          <button type="button" data-cookie-reject>
            Reddet
          </button>
          <button type="button" className="btn btn-primary" data-cookie-accept>
            Kabul
          </button>
        </div>
      </div>
      <script dangerouslySetInnerHTML={{ __html: boot }} />
    </>
  );
}
