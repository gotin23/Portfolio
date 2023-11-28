import { useEffect } from "react";

function useIntersectionObserver(targets, options, callback) {
  useEffect(() => {
    // Crée une nouvelle instance de l'IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      // Pour chaque entrée (élément observé)
      entries.forEach((entry) => {
        // Si l'élément est en intersection avec la zone d'affichage
        if (entry.isIntersecting) {
          // Appelle la fonction de rappel avec l'entrée
          callback(entry);
          // Cesse d'observer cet élément
          observer.unobserve(entry.target);
        }
      });
    }, options);

    // Pour chaque cible, observe l'élément
    targets.forEach((target) => {
      if (target) {
        observer.observe(target);
      }
    });

    // Fonction de nettoyage : arrête d'observer toutes les cibles lors du démontage du composant
    return () => {
      targets.forEach((target) => {
        if (target) {
          observer.unobserve(target);
        }
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targets]);
}

export default useIntersectionObserver;
