import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, CalendarDays, Check, Gift, Play, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import workshopHero from "@/assets/workshop-hero.jpg";
import speakerPortrait from "@/assets/dien-gia-sophia.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI cho người bán hàng | Workshop thực hành" },
      { name: "description", content: "Workshop thực hành giúp người bán hàng dùng AI để viết nội dung, làm ảnh, làm video và chăm sóc khách hàng." },
      { property: "og:title", content: "AI cho người bán hàng" },
      { property: "og:description", content: "Học cách dùng AI để bán hàng nhanh hơn, từng bước và có bài tập thực hành." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const benefits = [
  ["Viết nội dung bán hàng bằng AI", "Nhận quy trình và câu lệnh mẫu để viết bài đăng, mô tả sản phẩm và kịch bản ngắn trong vài phút."],
  ["Làm ảnh và video sản phẩm", "Thực hành tạo ảnh, video ngắn cho cửa hàng của bạn mà không cần thuê ngoài."],
  ["Tự động hóa việc lặp lại", "Thiết lập các bước chăm sóc khách và trả lời tin nhắn thường gặp theo nhu cầu riêng."],
  ["Đóng gói kỹ năng thành sản phẩm", "Biết cách đóng gói và định vị một kỹ năng AI thành dịch vụ hoặc sản phẩm có thể bán."],
  ["Bộ tài nguyên độc quyền", "Nhận checklist, câu lệnh mẫu và tài liệu thực hành để áp dụng ngay sau buổi học."],
  ["Ý tưởng tạo thu nhập", "Khám phá các mô hình ứng dụng AI thực tế cho người bán hàng online, người làm nội dung và chủ cửa hàng nhỏ."],
];

function RegisterButton({ label = "Nhận vé & miễn phí tài nguyên" }: { label?: string }) {
  return (
    <Button asChild variant="workshop" size="workshop" className="w-full max-w-md rounded-lg">
      <a href="#register">{label}<ArrowUpRight aria-hidden="true" /></a>
    </Button>
  );
}

function FallingPetals() {
  return (
    <div className="petal-scene" aria-hidden="true">
      {Array.from({ length: 18 }, (_, index) => <span key={index} className="petal" />)}
    </div>
  );
}

function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-background font-body text-foreground selection:bg-primary selection:text-primary-foreground">
      <FallingPetals />
      <div className="bg-primary px-4 py-3 text-center text-primary-foreground">
        <p className="font-mono text-[11px] font-medium uppercase">• Workshop mẫu — thay nội dung của bạn •</p>
      </div>

      <header className="mx-auto max-w-[880px] px-5 pb-16 pt-14 text-center sm:px-8 sm:pt-20">
        <div className="workshop-rise">
          <p className="mb-5 font-mono text-xs font-medium uppercase text-primary">Workshop thực hành dành cho người bán hàng</p>
          <h1 className="text-balance font-display text-5xl font-normal uppercase leading-[0.94] sm:text-7xl lg:text-8xl">
            AI cho người bán hàng: làm ít hơn, bán <span className="text-primary">nhiều hơn</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
            Học cách dùng AI để viết nội dung, làm ảnh, làm video và chăm sóc khách hàng ngay trong buổi học.
          </p>
        </div>

        <div className="workshop-rise mt-9 inline-flex items-center gap-3 rounded-lg border border-primary/15 bg-secondary px-5 py-3 [animation-delay:100ms]">
          <CalendarDays className="size-5 text-primary" aria-hidden="true" />
          <span className="font-mono text-sm font-medium text-secondary-foreground">20:00 — Chủ nhật, 21/09</span>
        </div>

        <div className="workshop-rise group relative mt-10 [animation-delay:200ms]">
          <div className="absolute -inset-1 rounded-xl bg-primary/20 opacity-30 blur-xl transition-opacity duration-700 group-hover:opacity-60" />
          <img src={workshopHero} alt="Sophia Nguyễn trình bày workshop AI cho người bán hàng" width={1366} height={768} className="relative aspect-video w-full rounded-lg border border-primary/20 object-cover shadow-2xl" />
          <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-md bg-foreground/90 px-3 py-2 font-mono text-[10px] uppercase text-background backdrop-blur sm:bottom-5 sm:left-5">
            <Sparkles className="size-3 text-primary" /> AI thực hành
          </div>
        </div>

        <div className="workshop-rise mt-10 [animation-delay:300ms]">
          <p className="mb-4 text-sm italic text-muted-foreground">Bạn muốn đứng ngoài cuộc chơi AI hay bắt đầu <strong className="text-primary">ngay hôm nay?</strong></p>
          <RegisterButton />
          <p className="mt-4 font-mono text-[11px] text-muted-foreground">Giữ chỗ và nhận trọn bộ tài nguyên độc quyền</p>
        </div>
      </header>

      <section className="border-y border-border bg-card px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[800px]">
          <div className="mb-12 text-center sm:mb-16">
            <p className="mb-3 font-mono text-xs uppercase text-primary">Giá trị bạn mang về</p>
            <h2 className="font-display text-4xl font-normal uppercase leading-none sm:text-6xl">Bạn sẽ nhận được gì?</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Không chỉ là ý tưởng — đây là bộ công cụ và quy trình để bạn bắt tay làm ngay.</p>
          </div>
          <div className="grid gap-3 sm:gap-4">
            {benefits.map(([title, description], index) => (
              <article key={title} className="group grid grid-cols-[auto_minmax(0,1fr)] gap-4 rounded-lg border border-border bg-background p-5 transition-colors hover:border-primary/40 sm:grid-cols-[64px_minmax(0,1fr)_auto] sm:items-center sm:gap-6 sm:p-6">
                <span className="font-display text-4xl font-extrabold text-primary/25 transition-colors group-hover:text-primary">{String(index + 1).padStart(2, "0")}</span>
                <div className="min-w-0">
                  <h3 className="font-display text-xl font-normal uppercase leading-tight sm:text-2xl">{title}</h3>
                  <p className="mt-1 leading-relaxed text-muted-foreground">{description}</p>
                </div>
                <ArrowUpRight className="hidden size-5 shrink-0 text-primary sm:block" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[800px]">
          <div className="mb-10 text-center">
            <p className="mb-3 font-mono text-xs uppercase text-primary">Người đồng hành</p>
            <h2 className="font-display text-4xl font-normal uppercase leading-none sm:text-6xl">Diễn giả huấn luyện</h2>
          </div>
          <div className="rounded-xl border border-border bg-card p-2 shadow-xl">
            <div className="flex flex-col items-center gap-8 rounded-lg bg-background p-6 sm:flex-row sm:p-8">
              <div className="relative shrink-0">
                <div className="workshop-pulse absolute -inset-3 rounded-full bg-primary/15" />
                <img src={speakerPortrait} alt="Chân dung diễn giả Sophia Nguyễn" width={768} height={768} loading="lazy" className="relative size-40 rounded-full border-4 border-card object-cover object-top shadow-lg sm:size-48" />
              </div>
              <div className="min-w-0 text-center sm:text-left">
                <h3 className="font-display text-4xl font-normal uppercase leading-none">Sophia Nguyễn</h3>
                <p className="mt-2 font-mono text-sm uppercase text-primary">Huấn luyện viên AI</p>
                <div className="my-5 flex flex-wrap justify-center gap-2 sm:justify-start">
                  {["AI cho bán hàng", "Nội dung", "Tự động hóa"].map((tag) => <span key={tag} className="rounded-full bg-secondary px-3 py-1 text-[10px] font-bold uppercase text-secondary-foreground">{tag}</span>)}
                </div>
                <p className="text-pretty leading-relaxed text-muted-foreground">Người hướng dẫn thực hành về AI, giúp người bán hàng và nhà sáng tạo biến công việc thủ công thành quy trình tự động dễ vận hành.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-foreground px-5 py-20 text-background sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[800px]">
          <div className="mb-10 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-5">
            <div className="min-w-0">
              <p className="mb-3 font-mono text-xs uppercase text-primary">Preview workshop</p>
              <h2 className="font-display text-4xl font-normal uppercase leading-none sm:text-6xl">Xem trước nội dung</h2>
              <p className="mt-4 text-background/60">Một lát cắt ngắn về cách dùng AI để hoàn thành công việc bán hàng.</p>
            </div>
            <span className="hidden rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase text-primary sm:block">Exclusive</span>
          </div>
          <a href="#register" className="group relative block aspect-video overflow-hidden rounded-lg border border-background/10" aria-label="Xem video giới thiệu workshop (thay liên kết video của bạn)">
            <img src={workshopHero} alt="Ảnh xem trước video workshop AI cho người bán hàng" width={1280} height={720} loading="lazy" className="h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-[1.02]" />
            <span className="absolute inset-0 grid place-items-center"><span className="grid size-16 place-items-center rounded-full bg-primary text-primary-foreground shadow-xl transition-transform group-hover:scale-110"><Play className="ml-1 size-6 fill-current" /></span></span>
          </a>
        </div>
      </section>

      <section id="register" className="scroll-mt-8 px-5 py-24 text-center sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[640px]">
          <div className="mx-auto mb-6 grid size-12 place-items-center rounded-full bg-secondary text-primary"><Users className="size-5" /></div>
          <h2 className="font-display text-5xl font-normal uppercase leading-none sm:text-6xl">Bắt đầu hành trình AI của bạn</h2>
          <p className="mx-auto mb-9 mt-5 max-w-xl text-lg text-muted-foreground">Tham gia cùng cộng đồng người bán hàng và nhà sáng tạo đang xây dựng hệ thống AI của riêng mình.</p>
          <RegisterButton label="Đăng ký giữ chỗ ngay" />
          <div className="mx-auto mt-8 grid max-w-md gap-3 text-left text-sm text-muted-foreground sm:grid-cols-2">
            <span className="flex items-center gap-2"><Check className="size-4 shrink-0 text-primary" /> Link tham gia workshop</span>
            <span className="flex items-center gap-2"><Gift className="size-4 shrink-0 text-primary" /> Bộ tài nguyên thực hành</span>
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-5 py-9 text-center font-mono text-[10px] uppercase text-muted-foreground">Workshop mẫu · Xưởng Skill AI © 2026</footer>
    </main>
  );
}
