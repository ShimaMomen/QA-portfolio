# 🧾 Fehlerbericht – Mehrfacheingabe (ISTQB-konform)

## **1. Defect-ID**
DEF-MEHRFACHEINGABE-001



## **2. Titel**
Markierung und Hinweis „Doppeltes Suchkriterium“ verschwinden nach Löschen eines Duplikats nicht



## **3. Beschreibung**
Beim Test der Komponente **Mehrfacheingabe** wurde festgestellt, dass nach dem Löschen eines doppelten Suchkriteriums die **gelbe Markierung** nicht entfernt wird.  
Zusätzlich bleibt der Hinweis-Tag **„Doppeltes Suchkriterium“** sichtbar, obwohl kein Duplikat mehr existiert.  

Dieses Verhalten entspricht nicht den definierten Akzeptanzkriterien.



## **4. Testumgebung**
- Build-Version: `2025.01.15`
- Browser: `Chrome 121.0`
- Betriebssystem: `Windows 10`
- Testsystem: `QA/Staging`



## **5. Schritte zur Reproduktion**
1. Komponente „Mehrfacheingabe“ öffnen  
2. Wert **„012511196“** eingeben und bestätigen  
3. Den gleichen Wert **„012511196“** erneut eingeben  
4. Beobachten: Beide Werte werden gelb markiert, Hinweis-Tag erscheint  
5. Einen der beiden Einträge **löschen**



## **6. Erwartetes Ergebnis**
- Die gelbe Markierung verschwindet vollständig  
- Der Hinweis-Tag **„Doppeltes Suchkriterium“** verschwindet  
- Zählung zeigt **1** eindeutigen Wert  
- Keine zusätzlichen UI-Warnungen sichtbar



## **7. Tatsächliches Ergebnis**
- Die gelbe Markierung bleibt sichtbar, obwohl nur ein Wert vorhanden ist  
- Hinweis-Tag bleibt weiterhin sichtbar  
- Optional: Zählung aktualisiert sich korrekt (je nach Systemverhalten)  
- UI-Zustand widerspricht den Funktionsanforderungen



## **8. Schweregrad (Severity)**
**Medium**

---

## **9. Priorität**
**High**



## **10. Betroffene Anforderungen**
- **ACR-MEHRFACHEINGABE-002:** Markierung von doppelten Suchkriterien  
- **ACR-MEHRFACHEINGABE-003:** Entfernen der Icons/Hinweise beim Entfernen eines Duplikats



## **11. Zugehörige Testfälle**
- **TC02 – Eingabe eines doppelten Suchkriteriums**  
- **TC05 – Löschen eines doppelten Wertes**



## **12. Anhänge**
- Screenshot: `Mehrfachmarkierung-nach-Löschen.png`  




## **13. Status: open**

