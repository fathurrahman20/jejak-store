import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatToRupiah(value: number) {
  const parsed = value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return `${"Rp "}${parsed}`;
}

export function formatDate(date: Date | null, format = "DD MMMM YYYY") {
  if (!date) {
    return dayjs().format(format);
  }

  return dayjs(date).format(format);
}

/**
 * Mengubah string teks menjadi format slug (URL-friendly).
 * Contoh: "Sepatu Adidas Running" menjadi "sepatu-adidas-running".
 * Contoh: "Sepatu" menjadi "sepatu".
 *
 * @param text - String yang akan diubah menjadi slug.
 * @returns String dalam format slug.
 */
export function createSlug(text: string): string {
  return text
    .toString() // Memastikan input adalah string
    .toLowerCase() // 1. Ubah semua karakter menjadi huruf kecil
    .replace(/\s+/g, "-") // 2. Ganti satu atau lebih spasi dengan satu tanda hubung (-)
    .replace(/[^\w\-]+/g, "") // 3. Hapus semua karakter yang bukan huruf, angka, underscore, atau tanda hubung
    .replace(/\-\-+/g, "-") // 4. Ganti beberapa tanda hubung berturut-turut dengan satu tanda hubung
    .replace(/^-+/, "") // 5. Hapus tanda hubung dari awal string (jika ada)
    .replace(/-+$/, ""); // 6. Hapus tanda hubung dari akhir string (jika ada)
}
