import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#060911] text-white flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-md w-full text-center space-y-6 relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-indigo-950/60 border border-indigo-500/30 mx-auto flex items-center justify-center">
          <Sparkles className="w-8 h-8 text-indigo-400" />
        </div>

        <div className="space-y-2">
          <div className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 font-mono">
            404
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm text-slate-400 leading-relaxed">
            The page or resource you are looking for does not exist or has been relocated within the Nextora platform.
          </p>
        </div>

        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/30 transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Nextora Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
