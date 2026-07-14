export default function ContactPage() {
  return (
    <main className="pt-24">
      <div className="mx-auto max-w-6xl px-5 pb-20">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-[rgba(255,255,255,0.10)] bg-[#071b33]/70 p-8 md:p-12">
            <p className="text-sm font-semibold text-coral">Contact</p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Talk partnerships.
            </h1>
            <p className="mt-5 text-sm leading-6 text-[rgba(255,255,255,0.72)]">
              This is a demo form. Wire it to your backend or CRM later.
            </p>

            <div className="mt-8 space-y-3 text-sm text-[rgba(255,255,255,0.74)]">
              <div>
                <span className="font-semibold text-white">Email:</span> partners@dailyhnt.demo
              </div>
              <div>
                <span className="font-semibold text-white">Response time:</span> within 24–48 hours
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-[rgba(255,255,255,0.10)] bg-white/5 p-8 md:p-12">
            <form className="grid gap-4">
              <div className="grid gap-2">
                <label className="text-sm font-semibold text-white">Name</label>
                <input
                  className="rounded-xl border border-[rgba(255,255,255,0.14)] bg-transparent px-4 py-2 text-sm text-white outline-none"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-semibold text-white">Email</label>
                <input
                  type="email"
                  className="rounded-xl border border-[rgba(255,255,255,0.14)] bg-transparent px-4 py-2 text-sm text-white outline-none"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-semibold text-white">Message</label>
                <textarea
                  className="min-h-[120px] rounded-xl border border-[rgba(255,255,255,0.14)] bg-transparent px-4 py-2 text-sm text-white outline-none"
                  placeholder="What are you looking to achieve?"
                  required
                />
              </div>

              <button
                type="submit"
                className="mt-2 rounded-xl bg-coral px-5 py-3 text-sm font-semibold text-white"
              >
                Send message
              </button>

              <p className="text-xs leading-5 text-[rgba(255,255,255,0.62)]">
                By submitting, you agree to the demo terms. (No network requests are made.)
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

