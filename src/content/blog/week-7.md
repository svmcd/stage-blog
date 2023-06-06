---
title: "Week 7"
date: "27 maart t/m 31 maart"
pubDate: "Mar 31 2023"
heroImage: "/placeholder-hero.jpg"
---

Ik begon de week met het onderzoeken van de beste aanpak voor het beveiligen van de pagina's. In eerste instantie overwoog ik om voor elke pagina gebruik te maken van de getServerSideProps-functie om te controleren of de gebruiker was ingelogd. Na verloop van tijd besefte ik echter dat ik veel code aan het herhalen was en dat er waarschijnlijk een efficiëntere manier was. Ik las over een middleware-bestand waarin je een functie kon schrijven en een lijst kon bijhouden van pagina's die geen authenticatie vereisen. Dit bleek veel efficiënter te zijn en resulteerde in veel minder code. Lokaal werkte alles naar behoren en mijn pull request voor de beveiligde pagina's werd goedgekeurd en samengevoegd met de hoofdbranch. De hoofdbranch wordt automatisch gedeployed op Vercel.

&nbsp;

Echter, toen we de productieversie testten, ontstonden er plotseling fouten. Om onbekende redenen werden er errors weergegeven, dus uiteindelijk hebben we besloten om de authenticatie tijdelijk uit te schakelen. We zijn van plan om dit probleem later op te lossen.

&nbsp;

Tegelijkertijd was ik ook bezig met een andere branch genaamd "UI and UX changes". Hierin voerde ik kleine aanpassingen door, zoals het toevoegen van laadanimaties, het implementeren van hover-effecten, het zorgen voor responsiveness en het oplossen van bugs. Voordat mijn pull request werd goedgekeurd en samengevoegd met de hoofdbranch, kreeg ik nog enkele feedbackpunten die ik meteen heb verwerkt.

&nbsp;

Het was een uitdagende week waarin ik meerdere taken tegelijkertijd heb afgerond. Het gebruik van middleware heeft de codebase vereenvoudigd en de UI/UX-aanpassingen hebben de gebruikerservaring verbeterd. Hoewel we wat problemen ondervonden in de productieversie, ben ik ervan overtuigd dat we hier een oplossing voor zullen vinden.
