import { motion } from "framer-motion";

const user = "shakilcreativework";

const cards = [
  {
    title: "GitHub Stats",
    src: `https://github-readme-stats.vercel.app/api?username=${user}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=c084fc&icon_color=f472b6&text_color=cbd5e1`,
  },
  {
    title: "Top Languages",
    src: `https://github-readme-stats.vercel.app/api/top-langs/?username=${user}&layout=compact&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=c084fc&text_color=cbd5e1`,
  },
  {
    title: "Streak",
    src: `https://github-readme-streak-stats.herokuapp.com/?user=${user}&theme=tokyonight&hide_border=true&background=00000000&ring=c084fc&fire=f472b6&currStreakLabel=c084fc`,
  },
];

export function GitbubStatsCard() {
  return (
      <div className="grid md:grid-cols-3 gap-5">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass rounded-2xl p-5 card-shadow flex bg-black items-center justify-center min-h-45 hover:shadow-[0_10px_40px_-10px_rgba(168,85,247,0.5)] transition"
          >
            <img
              src={c.src}
              alt={c.title}
              loading="lazy"
              className="max-w-full"
            />
          </motion.div>
        ))}
      </div>
  );
}