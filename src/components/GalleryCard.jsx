import { Image as ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function GalleryCard({ item }) {
  return (
    <motion.article
      whileHover="hover"
      initial="initial"
      className="card overflow-hidden"
    >
      <div className="h-48 overflow-hidden bg-slate-100">
        {item.image ? (
          <motion.img
            variants={{
              initial: { scale: 1 },
              hover: { scale: 1.05 }
            }}
            transition={{ duration: 0.3 }}
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-slate-400">
            <div className="text-center">
              <ImageIcon className="mx-auto opacity-80" size={28} />
              <p className="mt-2 text-xs font-semibold opacity-80">{item.category}</p>
            </div>
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-600">
            {item.category}
          </span>
          <span className="text-xs font-semibold text-slate-500">{item.date}</span>
        </div>
        <h3 className="mt-3 font-bold text-slate-950">{item.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{item.caption}</p>
        <p className="mt-3 text-xs font-semibold text-slate-500">{item.location}</p>
      </div>
    </motion.article>
  );
}