# Mẫu trang bán workshop – Xưởng Skill AI

Trang bán hàng một màn cho workshop/khóa học: banner, lợi ích, diễn giả, video xem trước, nút đăng ký.
Làm bằng TanStack Start + React + Tailwind + shadcn/ui.

Nội dung và ảnh trong kho là **mẫu** (workshop "AI cho người bán hàng" do Sophia Nguyễn trình bày; ảnh tạm của Xưởng Skill AI).
Hãy thay bằng nội dung, ảnh của bạn: `src/routes/index.tsx` (chữ), `src/assets/` (ảnh).

## Chạy thử

```sh
npm install
npm run dev
npm run build
```

Nút "Đăng ký" hiện chỉ là neo trong trang. Khi nối thật, chỉ nối vào kênh nhận đăng ký của bạn.

## Đưa lên mạng

Trang này là **trang tĩnh**, không cần máy chủ.

1. Chạy `npm install` (một lần) rồi `npm run build`.
2. Máy sinh ra thư mục `dist/client` (chỉ gồm html, css, js, ảnh).
3. Kéo-thả **thư mục `dist/client`** lên Netlify Drop (app.netlify.com/drop), hoặc Vercel, hoặc Cloudflare Pages (Upload assets). Không cần cài thêm công cụ nào.

## Hướng dẫn và hỗ trợ

Hướng dẫn từng bước và hỗ trợ có trong skill tương ứng trên sàn https://xuongskillai.vercel.app

## Ảnh và giấy phép

Ảnh nhân vật Sophia Nguyễn là của Xưởng Skill AI, chỉ để minh họa — thay bằng ảnh của bạn. Xem giấy phép trong file `LICENSE`.
