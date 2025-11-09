"use client"

import { Phone, Home, MapPin, Clock, Sparkles, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"

export default function Page() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const phoneNumber = "+225 0799943674"
  const phoneLink = "tel:+2250799943674"

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5 overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-0 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
          style={{ animationDelay: "-3s" }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className="relative px-4 py-20 md:py-32 lg:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className={`mb-8 space-y-6 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary mb-4 animate-fade-in-up">
              <Sparkles className="h-4 w-4" />
              Monsieur G - Celui qui exauce vos voeux <br /> Résidences meublées - Résidences étudiantes - Appartements - Studios - Colocations - Chambres
            </div>

            <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground md:text-7xl lg:text-8xl animate-fade-in-up delay-100">
              Ne cherchez plus, vous avez trouvé.{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Monsieur G
                </span>
              </span>
            </h1>

           {/*  <p className="text-balance text-xl text-muted-foreground md:text-2xl max-w-2xl mx-auto animate-fade-in-up delay-200">
              Je vous aide à trouver le studio idéal le plus rapidement possible. Avec mon expertise, découvrez les
              meilleures options disponibles
            </p> */}
          </div>

          <div
            className={`mx-auto mb-16 max-w-2xl rounded-2xl bg-primary backdrop-blur-sm p-8 shadow-xl md:p-12 border border-primary animate-fade-in-up delay-300 transition-all hover:shadow-2xl ${isLoaded ? "animate-pulse-glow" : ""}`}
          >
            <div className="mb-6 flex items-center justify-center gap-2">
              <Phone className="h-6 w-6 text-white animate-bounce" />
              <span className="text-sm font-semibold uppercase tracking-wide text-white">Disponible 24/7</span>
            </div>
            <p className="mb-2 text-5xl font-bold text-white md:text-6xl">{phoneNumber}</p>
            <p className="text-white mb-6">Appelez Monsieur G dès maintenant</p>
            <a
              href={phoneLink}
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-primary font-semibold transition-all hover:shadow-lg hover:scale-105 active:scale-95 animate-fade-in-up delay-200"
            >
              <Phone className="h-5 w-5" />
              Appeler maintenant
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Home,
                title: "Lieux de qualité",
                desc: "Modernes, confortables et adaptés à vos besoins",
                delay: "300",
              },
              {
                icon: Clock,
                title: "Ultra rapide",
                desc: "Trouvez en quelques jours seulement",
                delay: "400",
              },
              {
                icon: MapPin,
                title: "Localisation idéale",
                desc: "Les meilleurues zones et quartiers",
                delay: "500",
              },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className={`rounded-xl border border-primary/20 bg-gradient-to-br from-card to-primary/5 p-8 transition-all hover:shadow-lg hover:scale-105 cursor-pointer group animate-fade-in-up delay-${item.delay}`}
                >
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-lg bg-primary/20 p-3 group-hover:bg-primary/30 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="border-t border-border bg-gradient-to-b from-card/30 to-transparent px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-16 text-center text-4xl font-bold text-foreground md:text-5xl animate-fade-in-up">
            Comment je vous aide à trouver ce que vous recherchez ?
          </h2>

          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
            {[
              {
                num: "1",
                title: "Décrivez ce que vous voulez",
                desc: "Budget, localisation, taille, confort... tous vos critères",
                delay: "200",
              },
              {
                num: "2",
                title: "Recherche intensive",
                desc: "Je prospecte toutes les sources et offres disponibles",
                delay: "300",
              },
              {
                num: "3",
                title: "Sélection premium",
                desc: "Je vous propose uniquement les correspondants",
                delay: "400",
              },
              {
                num: "4",
                title: "Suivi jusqu'au bout",
                desc: "Je vous accompagne dans toutes les démarches",
                delay: "500",
              },
            ].map((step) => (
              <div
                key={step.num}
                className={`flex gap-4 p-6 rounded-xl hover:bg-primary/5 transition-all animate-fade-in-up delay-${step.delay} group`}
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground font-bold group-hover:shadow-lg group-hover:scale-110 transition-all">
                  {step.num}
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl animate-fade-in-up">
            Prêt ?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground animate-fade-in-up delay-100">
            Contactez Monsieur G pour une recherche rapide et efficace
          </p>
          <a
            href={phoneLink}
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-lg font-semibold text-primary-foreground transition-all hover:shadow-xl hover:scale-105 active:scale-95 animate-fade-in-up delay-200"
          >
            <Phone className="h-5 w-5" />
            {phoneNumber}
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-gradient-to-t from-card/50 to-transparent px-4 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm text-muted-foreground mb-2">Monsieur G - Spécialiste recherche de studios</p>
          <p className="text-sm text-muted-foreground">
            Votre partenaire de confiance pour exaucer vos voeux
          </p>
        </div>
      </footer>
    </main>
  )
}
