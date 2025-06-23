// questions.js - Baby/Parenting Quiz Data with Multi-Category Support (ES6 Modules)

import { QuizUtils } from './utils.js';

// Category definitions for baby/parenting topics
export const CATEGORIES = {
    'birth-prep': 'Birth Preparation',
    'labor-delivery': 'Labor & Delivery', 
    'postpartum': 'Postpartum Recovery',
    'newborn': 'Newborn Essentials',
    'breastfeeding': 'Breastfeeding',
    'bottle-feeding': 'Bottle Feeding',
    'solids': 'Introducing Solids',
    'sleep': 'Sleep & Soothing',
    'dev-0-6': 'Growth & Development (0-6 months)',
    'dev-6-18': 'Growth & Development (6-18 months)',
    'toddler': 'Toddler Development (18+ months)',
    'health': 'Health & Medical Care',
    'safety': 'Safety & Childproofing',
    'language': 'Language Development',
    'play': 'Play & Learning',
    'special': 'Special Situations'
};

// All questions in a single array with tags for multiple categories
export const QUESTIONS = [
    {
        id: "baby_001",
        question: "When should you start tummy time with your newborn?",
        options: ["Immediately after birth", "After 2 weeks", "After 1 month", "After 6 weeks"],
        correct: 0,
        explanation: "Tummy time should begin as early as the first day home from the hospital, even if it's just for 2-3 minutes at a time. This crucial activity helps develop neck, shoulder, and core muscles while preventing flat head syndrome (positional plagiocephaly). Start with baby lying on your chest or lap, gradually progressing to the floor as they get stronger. Many parents mistakenly wait weeks to start, but early introduction helps babies adjust more easily. Always supervise tummy time and stop if baby becomes overly fussy. As baby grows stronger, gradually increase sessions to 15-20 minutes total per day by 2 months old.",
        difficulty: "medium",
        tags: ["newborn", "dev-0-6", "safety"]
    },
    {
        id: "baby_002", 
        question: "How often should a newborn feed in the first few days?",
        options: ["Every 4-6 hours", "Every 2-3 hours", "Every 6-8 hours", "Only when crying"],
        correct: 1,
        explanation: "Newborns need to feed every 2-3 hours around the clock (8-12 times per day) during their first weeks of life. This frequent feeding serves multiple purposes: it helps establish and maintain milk supply for breastfeeding mothers, ensures proper nutrition for rapid growth, prevents dangerous blood sugar drops, and helps babies regain their birth weight within 10-14 days. Don't wait for crying - this is a late hunger cue. Early signs include rooting, lip smacking, and bringing hands to mouth. Feeding on demand within this 2-3 hour window helps establish healthy eating patterns and supports optimal development.",
        difficulty: "easy",
        tags: ["newborn", "breastfeeding", "bottle-feeding"]
    },
    {
        id: "baby_003",
        question: "What is the recommended room temperature for a baby's sleep environment?",
        options: ["65-68°F (18-20°C)", "68-70°F (20-21°C)", "70-72°F (21-22°C)", "72-75°F (22-24°C)"],
        correct: 1,
        explanation: "The optimal room temperature for infant sleep is 68-70°F (20-21°C). This temperature range prevents overheating, which is a significant risk factor for SIDS (Sudden Infant Death Syndrome). Babies have immature temperature regulation systems and can overheat quickly, especially when swaddled or wearing sleep sacks. Signs of overheating include sweating, damp hair, flushed cheeks, heat rash, and rapid breathing. To check if baby is comfortable, feel their chest or back of neck - it should feel warm but not hot or sweaty. Dress baby in light sleep clothing and avoid heavy blankets, hats, or excessive layers during sleep.",
        difficulty: "medium",
        tags: ["sleep", "safety", "newborn"]
    },
    {
        id: "baby_004",
        question: "When do babies typically start sitting without support?",
        options: ["4-5 months", "6-8 months", "9-10 months", "12 months"],
        correct: 1,
        explanation: "Most babies achieve independent sitting between 6-8 months, though the progression varies significantly among children. At 4-5 months, babies can typically sit with support and may briefly sit alone but will topple over. By 6 months, many can sit independently for short periods, and by 8 months, most can sit steadily and play with toys while seated. This milestone requires significant core strength, balance, and coordination development. Before babies can sit independently, they need to master head control (around 3-4 months) and supported sitting. Some babies may sit as early as 5 months or as late as 9 months - both are normal ranges. Encourage development with supervised practice and tummy time.",
        difficulty: "easy",
        tags: ["dev-6-18", "dev-0-6"]
    },
    {
        id: "baby_005",
        question: "What should you do if your baby has a fever over 100.4°F (38°C) and is under 3 months old?",
        options: ["Give infant acetaminophen", "Wait and monitor", "Contact pediatrician immediately", "Use a cool bath"],
        correct: 2,
        explanation: "Any fever of 100.4°F (38°C) or higher in babies under 3 months old is considered a pediatric emergency requiring immediate medical attention. Young infants have immature immune systems and can develop serious infections rapidly, including sepsis, meningitis, or pneumonia. Their symptoms may be subtle, making fever one of the most reliable early warning signs. Never give fever-reducing medications to babies under 3 months without medical supervision, as this can mask important symptoms. Take a rectal temperature for accuracy. Call your pediatrician immediately or go to the emergency room if you can't reach them. Time is critical - don't adopt a 'wait and see' approach with very young babies.",
        difficulty: "hard",
        tags: ["health", "newborn", "special"]
    },
    {
        id: "baby_006",
        question: "How long should you burp a breastfed baby?",
        options: ["30 seconds", "1-2 minutes", "5 minutes", "Until they burp"],
        correct: 3,
        explanation: "Try burping for a few minutes, but don't stress if your breastfed baby doesn't burp every time. Breastfed babies typically swallow less air than bottle-fed babies because they control the milk flow and create a better seal at the breast. However, some babies do need to burp, especially if they're gassy or fussy after feeds. Try different positions: over the shoulder, sitting upright while supporting the chin, or lying face-down across your lap. Gently pat or rub their back. If no burp comes after 2-3 minutes of trying, it's fine to stop. Some babies release gas from the other end instead, which is also normal. Focus more on baby's comfort than achieving a burp.",
        difficulty: "easy",
        tags: ["breastfeeding", "newborn"]
    },
    {
        id: "baby_007",
        question: "What's the safest sleep position for babies?",
        options: ["On their stomach", "On their back", "On their side", "Any position is fine"],
        correct: 1,
        explanation: "Always place babies on their backs to sleep, for both naps and nighttime, until their first birthday. This 'Back to Sleep' recommendation has reduced SIDS deaths by more than 50% since the 1990s. Back sleeping keeps the airway clear and prevents rebreathing of exhaled carbon dioxide. Side sleeping is unsafe because babies can easily roll to their stomach. Once babies can roll both ways consistently (usually 4-6 months), they may roll to their stomach during sleep, which is okay - just continue placing them on their back initially. Other safe sleep practices include using a firm sleep surface, keeping the crib bare (no blankets, pillows, or bumpers), and avoiding smoke exposure.",
        difficulty: "easy",
        tags: ["sleep", "safety", "newborn"]
    },
    {
        id: "baby_008",
        question: "When can you start introducing solid foods to your baby?",
        options: ["4 months", "6 months", "8 months", "12 months"],
        correct: 1,
        explanation: "Most babies are ready for solid foods around 6 months, when several developmental milestones align. Key readiness signs include: sitting up with minimal support, good head and neck control, showing interest in food by reaching for it or opening their mouth when food approaches, and losing the tongue-thrust reflex that pushes food out of their mouth. Starting solids too early (before 4 months) can increase risk of allergies, choking, and digestive issues, while starting too late can lead to iron deficiency and feeding difficulties. At 6 months, breast milk or formula still provides most nutrition, but babies need additional iron and other nutrients. Begin with iron-rich foods like iron-fortified cereals, pureed meats, or well-cooked beans.",
        difficulty: "easy",
        tags: ["solids", "dev-6-18"]
    },
    {
        id: "baby_009",
        question: "How many wet diapers should a newborn have per day after the first week?",
        options: ["3-4", "6-8", "10-12", "15-20"],
        correct: 1,
        explanation: "After the first week of life, babies should have at least 6-8 wet diapers per day, which indicates adequate fluid intake and proper kidney function. During the first few days, babies may have fewer wet diapers as they adjust to feeding and lose some initial body weight. The progression typically looks like: Day 1-2: 1-2 wet diapers; Day 3-4: 3-4 wet diapers; Day 5 and beyond: 6-8+ wet diapers daily. Urine should be pale yellow or clear - dark yellow or strong-smelling urine may indicate dehydration. Keep track of wet diapers in the early weeks, as this is one of the best indicators that feeding is going well. If you notice fewer wet diapers, contact your pediatrician, as this could signal feeding issues or dehydration.",
        difficulty: "medium",
        tags: ["newborn", "health", "breastfeeding", "bottle-feeding"]
    },
    {
        id: "baby_010",
        question: "What's the recommended way to clean a baby's umbilical cord stump?",
        options: ["Alcohol wipes daily", "Soap and water", "Keep it dry and clean", "Antibiotic ointment"],
        correct: 2,
        explanation: "The current recommendation is to keep the umbilical cord stump clean and dry, allowing it to heal naturally. Previously, alcohol was recommended, but research shows that letting the stump air dry actually promotes faster healing and reduces infection risk. Fold diapers down below the stump to prevent urine contact, and choose onesies that don't cover the area, or fold them up. The stump typically falls off within 1-3 weeks, leaving a small wound that heals within a few days. Normal signs include slight bleeding when the stump falls off and clear or slightly yellow discharge. Call your pediatrician if you notice red streaks, pus, foul odor, or if the area becomes hot or swollen, as these could indicate infection.",
        difficulty: "medium",
        tags: ["newborn", "health"]
    },
    {
        id: "baby_011",
        question: "When do babies typically say their first words?",
        options: ["6-9 months", "9-12 months", "12-15 months", "15-18 months"],
        correct: 1,
        explanation: "Most babies say their first recognizable words between 9-12 months, though language development varies widely among children. Before first words, babies progress through important stages: cooing (2-3 months), babbling with consonants like 'ba-ba' or 'da-da' (4-6 months), and meaningful babbling that sounds like conversation (7-9 months). First words are typically 'mama,' 'dada,' 'bye-bye,' or other simple, meaningful sounds. However, babies understand much more than they can say - receptive language develops before expressive language. Some babies may not say clear words until 15-18 months but still fall within normal ranges. Encourage language development by talking, reading, singing, and responding to baby's vocalizations. If your child isn't saying any words by 15 months, discuss with your pediatrician.",
        difficulty: "easy",
        tags: ["language", "dev-6-18"]
    },
    {
        id: "baby_012",
        question: "What should you pack in your hospital bag for labor?",
        options: ["Just insurance cards", "Comfortable clothes and toiletries", "Everything for baby", "The hospital provides everything"],
        correct: 1,
        explanation: "Pack a well-organized hospital bag with essentials for both you and your partner, as hospitals provide basic necessities but personal items enhance comfort. For mom: comfortable going-home outfit (maternity-sized), nursing bras, comfortable slippers with grip soles, toiletries, phone charger, snacks, and any special comfort items. For baby: going-home outfit in two sizes (newborn and 0-3 months), car seat (required for discharge), and perhaps a special blanket. For partner: change of clothes, toiletries, snacks, and entertainment. Pack 2-3 weeks before your due date. While hospitals provide gowns, mesh underwear, pads, and basic baby care items, having your own comfortable clothes and familiar toiletries can make the experience more pleasant and help you feel more like yourself during recovery.",
        difficulty: "easy",
        tags: ["birth-prep", "labor-delivery"]
    },
    {
        id: "baby_013",
        question: "How long does postpartum bleeding typically last?",
        options: ["3-5 days", "1-2 weeks", "4-6 weeks", "2-3 months"],
        correct: 2,
        explanation: "Postpartum bleeding (lochia) typically lasts 4-6 weeks as your uterus contracts back to its pre-pregnancy size and the placental site heals. The bleeding changes over time: Week 1-2: Heavy, bright red bleeding (lochia rubra) with possible clots; Week 2-3: Lighter, pinkish-brown discharge (lochia serosa); Week 3-6: Light, yellowish-white discharge (lochia alba). It's normal for bleeding to increase slightly with activity or breastfeeding. However, call your healthcare provider immediately if you experience: soaking more than one pad per hour for two consecutive hours, clots larger than a golf ball, bright red bleeding after it had lightened, foul-smelling discharge, or fever above 100.4°F. These could indicate complications like retained placenta or infection requiring medical attention.",
        difficulty: "medium",
        tags: ["postpartum", "health"]
    },
    {
        id: "baby_014",
        question: "When should you call the pediatrician about baby's crying?",
        options: ["After 30 minutes", "If nothing soothes them for hours", "Never, crying is normal", "Only if they have a fever"],
        correct: 1,
        explanation: "While crying is normal infant communication, call your pediatrician if your baby cries inconsolably for 3+ hours despite trying various soothing techniques, or if the cry sounds different (high-pitched, shrill, or weak). Normal newborn crying peaks around 6 weeks and can total 2-3 hours daily. Try the '5 S's': swaddling, side/stomach position (when awake), shushing, swinging, and sucking. Other concerning signs warrant immediate medical attention: fever, changes in eating or sleeping patterns, vomiting, diarrhea, lethargy, or if baby seems to be in pain when touched. Trust your instincts - you know your baby best. Persistent crying can also indicate colic, reflux, or food sensitivities. Don't hesitate to seek support for your own mental health too, as constant crying can be emotionally exhausting for parents.",
        difficulty: "medium",
        tags: ["newborn", "health", "sleep"]
    },
    {
        id: "baby_015",
        question: "What's the most common cause of colic-like symptoms?",
        options: ["Hunger", "Overstimulation", "Gas or digestive issues", "Being too cold"],
        correct: 2,
        explanation: "Gas and digestive discomfort are the most common causes of extended fussiness in young babies, though true colic (crying 3+ hours daily for 3+ weeks) has no definitive cause. Baby's digestive systems are immature, making them prone to gas buildup, especially after feeds. Contributing factors include swallowing air during feeding, lactose sensitivity, or mother's diet (if breastfeeding). Signs of gas discomfort include pulling legs up, arching back, and increased crying after feeds. Relief techniques include bicycle leg movements, gentle tummy massage, burping frequently during feeds, and probiotics (with pediatrician approval). However, distinguish between normal digestive discomfort and true colic. If crying is excessive, occurs at the same time daily, and nothing provides relief, discuss with your pediatrician to rule out other causes like reflux or food allergies.",
        difficulty: "medium",
        tags: ["newborn", "health", "sleep"]
    },
    {
        id: "baby_016",
        question: "When do babies typically start crawling?",
        options: ["4-6 months", "6-8 months", "8-10 months", "10-12 months"],
        correct: 2,
        explanation: "Most babies begin crawling between 8-10 months, though the timeline and style vary significantly. Before crawling, babies typically master rolling (4-6 months), sitting without support (6-8 months), and getting into crawling position (7-9 months). Some babies skip traditional crawling entirely, preferring to scoot on their bottom, roll to destinations, or go straight to pulling up and walking. Different crawling styles include traditional hands-and-knees crawling, army crawling (dragging with arms), and bear crawling (hands and feet). Encourage crawling by placing interesting toys just out of reach, creating safe floor space for exploration, and doing plenty of tummy time to build upper body strength. Remember that babies who skip crawling aren't developmentally delayed - they're just choosing different movement patterns to explore their world.",
        difficulty: "easy",
        tags: ["dev-6-18", "dev-0-6"]
    },
    {
        id: "baby_017",
        question: "What's the best first food for babies?",
        options: ["Rice cereal", "Banana", "Iron-fortified cereal or iron-rich foods", "Whatever the family is eating"],
        correct: 2,
        explanation: "Iron-fortified cereals or iron-rich foods like pureed meats, poultry, fish, or well-cooked beans are ideal first foods because babies' iron stores from birth become depleted around 6 months. While rice cereal was traditionally recommended, current guidelines emphasize iron content over texture. Babies are born with iron stores that last about 6 months, after which they need dietary iron to prevent anemia, which can affect brain development. Good first foods include: iron-fortified oat or barley cereal (mixed with breast milk or formula), pureed meats, mashed avocado, or sweet potato. Avoid honey (botulism risk under 12 months), whole nuts (choking hazard), and high-mercury fish. Baby-led weaning is also an option, offering appropriate finger foods. The key is ensuring adequate iron intake while introducing a variety of flavors and textures.",
        difficulty: "medium",
        tags: ["solids", "dev-6-18", "health"]
    },
    {
        id: "baby_018",
        question: "How often should you bathe a newborn?",
        options: ["Daily", "Every other day", "2-3 times per week", "Once a week"],
        correct: 2,
        explanation: "Newborns only need baths 2-3 times per week since they don't get very dirty and their skin is delicate. Daily bathing can strip natural oils and cause dryness, irritation, or eczema. Between baths, clean the diaper area thoroughly with each change and wash face and hands as needed. Until the umbilical cord stump falls off, stick to sponge baths to keep the area dry. Once it heals, you can begin tub baths in a few inches of warm water (around 98-100°F). Keep baths short (5-10 minutes) and use mild, fragrance-free baby soap sparingly. Pay attention to skin folds where milk or moisture can accumulate. Some babies find baths relaxing and may enjoy them daily as part of a bedtime routine, but it's not necessary for cleanliness. Always supervise closely and never leave baby alone in water, even for a second.",
        difficulty: "easy",
        tags: ["newborn", "health", "safety"]
    },
    {
        id: "baby_019",
        question: "What's the earliest age to start potty training?",
        options: ["12 months", "18 months", "24 months", "When the child shows readiness signs"],
        correct: 3,
        explanation: "Potty training should begin when your child shows multiple readiness signs, typically between 20 months and 3 years, rather than at a specific age. Key readiness indicators include: staying dry for longer periods, showing interest in the bathroom or potty, communicating when they're wet or soiled, demonstrating independence in other areas, and having regular, predictable bowel movements. Physical readiness includes being able to walk steadily, sit down and stand up independently, and having developed some bladder and bowel control. Emotional readiness involves being cooperative, able to follow simple instructions, and showing pride in independence. Starting too early can lead to frustration and setbacks for both child and parent. The process typically takes 3-6 months and requires patience, consistency, and positive reinforcement. Remember that nighttime dryness often comes months after daytime control is established.",
        difficulty: "easy",
        tags: ["toddler"]
    },
    {
        id: "baby_020",
        question: "How should you introduce potential allergens to babies?",
        options: ["Avoid until age 2", "One at a time, early and often", "Mix them together", "Only if there's no family history"],
        correct: 1,
        explanation: "Current guidelines recommend introducing common allergens early (around 6 months) and frequently, as this approach actually helps prevent food allergies rather than cause them. The 'Big 8' allergens include milk, eggs, peanuts, tree nuts, soy, wheat, fish, and shellfish. Introduce one new allergen at a time, waiting 3-5 days between new foods to identify any reactions. Start with small amounts mixed into familiar foods - for example, a small amount of peanut butter mixed into oatmeal. Continue offering allergenic foods regularly (2-3 times per week) once introduced, as irregular exposure may increase allergy risk. This represents a major shift from previous advice to delay allergens. Even babies with family history of allergies should follow this approach, though you may want to consult with your pediatrician first. Watch for allergic reactions including hives, vomiting, difficulty breathing, or severe fussiness, and seek immediate medical care for severe symptoms.",
        difficulty: "medium",
        tags: ["solids", "health", "dev-6-18"]
    },
    {
        id: "baby_021",
        question: "When should newborns have their first bowel movement?",
        options: ["Within the first 6 hours after birth", "Within the first 24-48 hours after birth", "Within the first week after birth", "Within the first 72 hours after birth"],
        correct: 1,
        explanation: "Newborns should pass meconium (their first stool) within 24-48 hours after birth. Meconium is dark, tarry, and odorless - completely different from regular baby poop. This timing is crucial because failure to pass meconium within this window may indicate serious conditions like intestinal obstruction, Hirschsprung's disease, or meconium ileus. Healthcare providers monitor this closely during hospital stays. After meconium passes, stools gradually transition over several days: from dark and tarry to greenish-brown, then to yellow and seedy in breastfed babies or firmer, tan-colored stools in formula-fed babies. The transition timing varies but typically occurs within the first week.",
        difficulty: "medium",
        tags: ["newborn", "health"]
    },
    {
        id: "baby_022", 
        question: "How often should a breastfeeding mother feed her newborn in the first few days?",
        options: ["Every 4-5 hours or 4-6 times per day", "Every 2-3 hours or 8-12 times per day", "Every hour during the day, every 3 hours at night", "On demand only, with no set schedule"],
        correct: 1,
        explanation: "Newborns should breastfeed every 2-3 hours, totaling 8-12 times in 24 hours during the first few days of life. This frequent feeding schedule serves multiple critical purposes: establishing robust milk supply, preventing dangerous dehydration and jaundice, supporting proper weight regain, and providing essential colostrum antibodies. Newborns have tiny stomachs (marble-sized on day 1, growing to walnut-sized by day 3) and breast milk digests quickly. Watch for early feeding cues like rooting, lip smacking, and hand-to-mouth movements rather than waiting for crying. While responsive feeding is important, sleepy or jaundiced newborns may need gentle encouragement to feed frequently enough for optimal health outcomes.",
        difficulty: "easy",
        tags: ["newborn", "breastfeeding"]
    },
    {
        id: "baby_023",
        question: "When should the umbilical cord stump typically fall off?",
        options: ["3-5 days after birth", "1-2 weeks after birth", "3-4 weeks after birth", "5-6 weeks after birth"],
        correct: 1,
        explanation: "The umbilical cord stump typically falls off within 1-2 weeks after birth, usually around 10-14 days, though this can vary from 7-21 days and still be normal. Keep the area clean and dry by folding diapers below the cord to prevent urine contact and giving only sponge baths until the cord falls off and the area heals completely. The stump will gradually change from blue-white to brown/black as it dries. Slight bleeding (a few drops) when the cord detaches is normal. However, contact your pediatrician for signs of infection including redness extending around the base, foul odor, pus, or persistent bleeding. Some babies develop a small granuloma (pink, moist tissue) after the cord falls off, which usually resolves naturally but should be evaluated.",
        difficulty: "easy",
        tags: ["newborn", "health"]
    },
    {
        id: "baby_024",
        question: "What is the normal weight loss range for newborns in the first few days of life?",
        options: ["1-3% of birth weight", "5-10% of birth weight", "10-15% of birth weight", "15-20% of birth weight"],
        correct: 1,
        explanation: "Normal newborn weight loss is 5-10% of birth weight in the first few days of life, with most babies losing 7-8% on average. This physiological weight loss occurs due to fluid shifts after birth, passage of meconium, and initially small feeding volumes while breastfeeding establishes. Babies typically regain their birth weight by 10-14 days of age. Weight loss exceeding 10% requires close monitoring and possible feeding intervention. Factors influencing weight loss include feeding method (breastfed babies may lose slightly more initially), birth weight, gestational age, delivery method, and maternal IV fluids during labor. Daily weight checks help healthcare providers monitor progress and determine if additional feeding support is needed to ensure healthy growth patterns.",
        difficulty: "medium",
        tags: ["newborn", "health", "breastfeeding"]
    },
    {
        id: "baby_025",
        question: "Which postpartum warning sign requires immediate medical attention?",
        options: ["Mild cramping during breastfeeding", "Soaking more than one pad per hour for two consecutive hours", "Mood swings and tearfulness", "Breast engorgement and tenderness"],
        correct: 1,
        explanation: "Soaking more than one pad per hour for two consecutive hours indicates postpartum hemorrhage and requires immediate emergency medical attention. This level of bleeding is abnormal and potentially life-threatening, possibly indicating retained placenta, uterine atony, or other serious complications. Other emergency postpartum warning signs include: fever over 100.4°F (indicating possible infection), severe headache with visual changes (preeclampsia), severe abdominal pain, chest pain or difficulty breathing (possible blood clot), calf pain or swelling (possible DVT), and thoughts of harming yourself or baby (postpartum depression/psychosis). While mild cramping during nursing (afterpains), mood swings, and breast engorgement are normal postpartum experiences, they should still be monitored and discussed with healthcare providers during routine follow-up.",
        difficulty: "hard",
        tags: ["postpartum", "health", "special"]
    },
    {
        id: "baby_026",
        question: "What is the appropriate response to a newborn's fontanelles (soft spots)?",
        options: ["Apply gentle pressure to help them close faster", "Avoid touching them completely as they're extremely fragile", "They can be gently touched during normal care activities", "Cover them with protective padding at all times"],
        correct: 2,
        explanation: "Fontanelles can be gently touched during normal care activities like hair washing, as they're protected by a tough, fibrous membrane beneath the skin. The anterior fontanelle (diamond-shaped, larger) typically measures 1-3 cm and closes between 12-18 months, while the posterior fontanelle (triangular, smaller) closes by 2-3 months. Normal fontanelles feel soft and slightly curved inward when baby is upright and calm. A sunken fontanelle may indicate dehydration requiring immediate attention, while a bulging fontanelle when baby is upright and calm may suggest increased intracranial pressure. Gentle pulsation reflecting the heartbeat is completely normal. Never apply pressure to accelerate closure - this occurs naturally as skull bones grow and fuse together during normal brain development.",
        difficulty: "medium",
        tags: ["newborn", "health", "safety"]
    },
    {
        id: "baby_027",
        question: "What is the correct technique for burping a newborn?",
        options: ["Pat firmly on the lower back to force air out quickly", "Hold upright and pat or rub gently on the upper back", "Lay baby flat and press on the stomach", "Turn baby upside down and pat the back"],
        correct: 1,
        explanation: "Hold the baby upright against your chest or sitting on your lap while supporting the head and neck, then gently pat or rub the upper back to help release trapped air. Three effective burping positions include: upright against your chest with baby's chin over your shoulder, sitting on your lap leaning slightly forward with chin and chest supported by your hand, or lying face-down across your lap with head turned to one side. Burp bottle-fed babies after every 1-2 ounces and breastfed babies when switching sides or if they seem uncomfortable. Not all babies need to burp after every feeding - some release gas naturally. Gentle, patient attempts for 3-5 minutes are usually sufficient. Never use forceful patting, press on the stomach, or position baby unsafely.",
        difficulty: "easy",
        tags: ["newborn", "breastfeeding", "bottle-feeding"]
    },
    {
        id: "baby_028",
        question: "When do newborn reflexes typically begin to disappear?",
        options: ["Within the first 2 weeks", "Around 3-6 months as voluntary control develops", "After the first year of life", "They remain throughout childhood"],
        correct: 1,
        explanation: "Most primitive newborn reflexes begin disappearing around 3-6 months as the nervous system matures and voluntary muscle control develops, marking important developmental milestones. The Moro (startle) reflex typically disappears by 3-4 months, rooting and sucking reflexes fade around 3-4 months when baby is awake and alert, the palmar grasp reflex usually disappears by 3-6 months as intentional grasping develops, and the stepping reflex fades by 2-3 months. Persistence of these primitive reflexes beyond expected timeframes may indicate neurological development concerns and should be evaluated by healthcare providers. These automatic responses are gradually replaced by purposeful, voluntary movements as the baby's brain and nervous system mature. Some reflexes like blinking, swallowing, and coughing remain throughout life as protective mechanisms.",
        difficulty: "medium",
        tags: ["newborn", "dev-0-6", "health"]
    },
    {
        id: "baby_029",
        question: "What is the safest way to bathe a newborn in the first weeks?",
        options: ["Full immersion baths in deep water for thorough cleaning", "Sponge baths until the umbilical cord heals completely", "Quick rinses under running water", "Daily soap and water baths for hygiene"],
        correct: 1,
        explanation: "Give sponge baths until the umbilical cord stump falls off and heals completely (usually 1-2 weeks) to prevent infection and keep the cord area dry. Use lukewarm water tested with your elbow or a thermometer (around 98-100°F), mild fragrance-free baby soap, and wash one area at a time while keeping the rest of baby covered with a warm, dry towel. Start with the face using plain water, then work systematically down the body, saving the diaper area for last. Pay special attention to skin folds where milk or moisture can accumulate. After cord healing, transition to shallow tub baths with 2-3 inches of warm water. Newborns don't get very dirty and have delicate skin, so bathing 2-3 times per week is sufficient unless there are diaper blowouts or significant spit-up requiring additional cleaning.",
        difficulty: "easy",
        tags: ["newborn", "health", "safety"]
    },
    {
        id: "baby_030",
        question: "How should parents respond to normal newborn crying patterns?",
        options: [
            "Let babies cry it out to develop independence", 
            "Pick up immediately every time to prevent spoiling", 
            "Respond consistently while learning baby's cues and needs", 
            "Only respond to crying during daytime hours"
        ],
        correct: 2,
        explanation: "Respond consistently to crying while learning to distinguish different types of cries and your baby's individual patterns. Newborns cry for various reasons: hunger, discomfort, tiredness, overstimulation, or need for comfort. Normal newborns cry 1-3 hours daily, often more in the evening. You cannot spoil a newborn by responding to cries. Try the 5 S's: swaddling, side/stomach position (when awake and supervised), shushing, swinging, and sucking. If crying seems excessive (over 3 hours daily for several days), persists despite meeting needs, or seems painful, consult healthcare providers.",
        difficulty: "medium",
        tags: ["newborn", "sleep", "dev-0-6"]
    },
    {
        id: "baby_031",
        question: "What is the recommended approach to tummy time for newborns?",
        options: [
            "Start with 30-minute sessions from birth",
            "Begin with 3-5 minutes several times daily while awake and supervised",
            "Only after 3 months when neck muscles are stronger",
            "Avoid completely until baby can roll over"
        ],
        correct: 1,
        explanation: "Begin tummy time with 3-5 minutes several times daily from the first week of life, always when baby is awake and supervised. Gradually increase duration as baby tolerates and enjoys it. Tummy time strengthens neck, shoulder, and back muscles, promotes motor development, and helps prevent flat head syndrome (positional plagiocephaly). Start on your chest, progress to firm surfaces like play mats. If baby fusses, try shorter sessions or different positions. Aim for 15-30 minutes total daily by 7 weeks old. Never leave baby unattended during tummy time, and always place baby on back for sleep.",
        difficulty: "easy",
        tags: ["newborn", "dev-0-6", "safety"]
    },
    {
        id: "baby_032",
        question: "What characterizes normal newborn sleep patterns?",
        options: [
            "8-hour stretches at night from birth",
            "14-17 hours daily in 2-4 hour stretches with no day-night distinction",
            "12 hours at night, 2-3 hour naps during day",
            "Consistent 6-hour sleep cycles"
        ],
        correct: 1,
        explanation: "Newborns sleep 14-17 hours per day in 2-4 hour stretches with no clear day-night distinction initially. They have shorter sleep cycles (50-60 minutes vs. adult 90-120 minutes) and spend more time in REM sleep, which is important for brain development. Newborns wake frequently for feeding and comfort, which is normal and necessary. Day-night patterns begin emerging around 6-8 weeks, with longer sleep stretches developing gradually. Create gentle routines by exposing baby to natural light during day feedings and keeping nighttime interactions calm and dim.",
        difficulty: "easy",
        tags: ["sleep", "newborn", "dev-0-6"]
    },
    {
        id: "baby_033",
        question: "When should parents be concerned about newborn jaundice?",
        options: [
            "Any yellowing of skin within the first week",
            "Jaundice appearing within 24 hours, severe yellowing, or persisting beyond 2-3 weeks",
            "Only if baby stops feeding completely",
            "Yellow coloring is always normal in newborns"
        ],
        correct: 1,
        explanation: "Be concerned about jaundice that appears within the first 24 hours (pathologic), involves severe yellowing extending to palms and soles, persists beyond 2-3 weeks, or is accompanied by poor feeding, lethargy, or high-pitched crying. Physiologic jaundice typically appears 2-3 days after birth, peaks around day 5, and resolves by 1-2 weeks. Risk factors include prematurity, blood type incompatibility, bruising during delivery, and inadequate feeding. Breastfeeding jaundice occurs with poor intake, while breast milk jaundice can persist longer but is usually harmless. Severe jaundice can cause brain damage, so prompt evaluation is crucial.",
        difficulty: "hard",
        tags: ["health", "newborn", "breastfeeding"]
    },
    {
        id: "baby_034",
        question: "What is the proper technique for cleaning newborn eyes?",
        options: [
            "Use the same cloth for both eyes to maintain consistency",
            "Clean from outer corner to inner corner with fresh cloth for each eye",
            "Clean from inner corner to outer corner with separate cloth for each eye",
            "Avoid cleaning around eyes to prevent irritation"
        ],
        correct: 2,
        explanation: "Clean each eye from inner corner to outer corner using a separate, clean, damp cloth or cotton ball for each eye to prevent cross-contamination. Use plain warm water - no soap or cleansers near the eyes. This technique helps prevent infection and clears normal discharge. Newborns often have sticky discharge from eyes due to immature tear ducts, blocked ducts, or normal adaptation. Gentle massage of the tear duct (inner corner) may help drainage. Seek medical attention for persistent thick discharge, redness, swelling, or if baby seems uncomfortable.",
        difficulty: "medium",
        tags: ["newborn", "health", "safety"]
    },
    {
        id: "baby_035",
        question: "How should parents monitor newborn hydration status?",
        options: [
            "Only count wet diapers after day 7",
            "Monitor wet diapers (6+ after day 4), alertness, and mucous membranes",
            "Weigh baby daily at home",
            "Give water between feedings to ensure hydration"
        ],
        correct: 1,
        explanation: "Monitor hydration by counting wet diapers (should have 6+ per day after day 4), observing alertness and activity level, checking for moist mucous membranes, and noting skin elasticity. Signs of dehydration include fewer wet diapers, dark yellow urine, dry mouth, sunken fontanelle, lethargy, and excessive sleepiness. Breastfed babies get adequate fluids from breast milk alone - additional water is not needed and can be dangerous. Formula-fed babies also don't need extra water. If concerned about hydration, consult healthcare providers rather than giving water, which can cause water intoxication and interfere with feeding.",
        difficulty: "medium",
        tags: ["health", "newborn", "breastfeeding", "bottle-feeding"]
    },
    {
        id: "baby_036",
        question: "What is the appropriate response to newborn hiccups?",
        options: [
            "Give small sips of water to stop them immediately",
            "Hold baby upside down briefly to reset breathing",
            "They're normal and usually resolve on their own without intervention",
            "Startle the baby to break the hiccup cycle"
        ],
        correct: 2,
        explanation: "Newborn hiccups are completely normal and usually resolve on their own without intervention. They're caused by the developing diaphragm and are often triggered by feeding, temperature changes, or excitement. Hiccups typically don't bother babies as much as they might adults. Never give water to newborns under 6 months as it can cause water intoxication and interfere with nutrition. Gentle burping, changing position, or offering breast/pacifier may help, but patience is often the best approach. Persistent hiccups lasting hours or interfering with feeding should be discussed with healthcare providers.",
        difficulty: "easy",
        tags: ["newborn", "health", "safety"]
    },
    {
        id: "baby_037",
        question: "When should newborn circumcision care be concerning?",
        options: [
            "Any swelling or redness in the first 48 hours",
            "Excessive bleeding, signs of infection, or inability to urinate",
            "Yellow discharge or scabbing during healing",
            "Fussiness during diaper changes"
        ],
        correct: 1,
        explanation: "Be concerned about excessive bleeding (more than a few drops), signs of infection (increasing redness, warmth, swelling, foul-smelling discharge, red streaks), fever, or inability to urinate within 6-8 hours post-procedure. Normal healing includes mild swelling, slight redness, and yellow discharge or scabbing as the area heals. Keep the area clean and dry, apply petroleum jelly or prescribed ointment, and change diapers frequently. The plastic ring (if used) typically falls off in 7-10 days. Some fussiness is normal, but excessive crying or signs of severe pain warrant medical evaluation. Complete healing usually occurs within 1-2 weeks.",
        difficulty: "medium",
        tags: ["health", "newborn", "special"]
    },
    {
        id: "baby_038",
        question: "What indicates effective newborn temperature regulation?",
        options: [
            "Baby feels warm to touch at all times",
            "Consistent axillary temperature of 97.7-99.5°F (36.5-37.5°C)",
            "Hands and feet are always warm and pink",
            "Baby sweats regularly to cool down"
        ],
        correct: 1,
        explanation: "Normal axillary (armpit) temperature for newborns is 97.7-99.5°F (36.5-37.5°C). Newborns have immature thermoregulation and can lose heat quickly through their large head surface area. Check temperature by feeling the chest or back of neck - hands and feet are often cooler and not reliable indicators. Signs of proper temperature regulation include appropriate activity level, good color, and comfort. Overheating signs include sweating, flushed skin, rapid breathing, and irritability. Cooling signs include mottled skin, lethargy, and poor feeding. Dress in layers that can be adjusted, and monitor room temperature.",
        difficulty: "medium",
        tags: ["health", "newborn", "safety"]
    },
    {
        id: "baby_039",
        question: "How should parents approach newborn feeding schedules?",
        options: [
            "Strict 4-hour intervals regardless of baby's cues",
            "Feed only when baby cries loudly",
            "Combine responsive feeding with ensuring adequate frequency (8-12 times daily)",
            "Let baby determine all feeding times without guidance"
        ],
        correct: 2,
        explanation: "Combine responsive feeding (watching for baby's hunger cues) with ensuring adequate feeding frequency of 8-12 times per day. Early hunger cues include rooting, lip smacking, hand-to-mouth movements, and increased alertness. Don't wait for crying, which is a late hunger sign. While following baby's natural rhythms is important, newborns may be too sleepy or weak to demand food frequently enough, especially in the first few days. Gentle encouragement may be needed. Track feeding frequency and duration, wet diapers, and weight gain to ensure adequacy. Consult healthcare providers if concerns arise about feeding patterns.",
        difficulty: "medium",
        tags: ["newborn", "breastfeeding", "bottle-feeding"]
    },
    {
        id: "baby_040",
        question: "What is the significance of newborn vernix caseosa?",
        options: [
            "It must be removed immediately to prevent infection",
            "It provides natural protection and moisturizing benefits",
            "It indicates premature birth and requires treatment",
            "It's a sign of poor maternal nutrition"
        ],
        correct: 1,
        explanation: "Vernix caseosa is the white, waxy coating that protects baby's skin in utero and provides natural moisturizing and antimicrobial benefits after birth. It's completely normal and beneficial - there's no need to rush its removal. Vernix helps regulate temperature, provides a barrier against bacteria, and keeps skin moisturized during the transition to air breathing. Babies born earlier tend to have more vernix, while post-term babies may have less. It will absorb naturally into the skin or can be gently wiped away during routine care. Modern practice often involves leaving vernix intact during initial care to maximize its protective benefits.",
        difficulty: "medium",
        tags: ["newborn", "health"]
    },
    {
        id: "baby_041",
        question: "When should parents start reading and talking to their newborn?",
        options: ["Wait until 3 months when baby is more alert", "Start immediately from birth to support language development", "Begin only after baby starts smiling socially", "Wait until 6 months when hearing is fully developed"],
        correct: 1,
        explanation: "Start talking, reading, and singing to your newborn immediately from birth to support early language development and bonding. Newborns can hear well at birth (hearing is actually fully developed before birth) and are programmed to prefer human voices, especially their parents'. Early language exposure supports brain development, teaches communication patterns, and strengthens emotional bonds. Use 'parentese' - higher pitch, slower tempo, exaggerated intonation - which babies prefer. Describe daily activities, read simple books, and respond to baby's sounds and expressions. This early interaction lays the foundation for later language skills and cognitive development.",
        difficulty: "easy",
        tags: ["newborn", "language development", "bonding"]
    },
    {
        id: "baby_042",
        question: "What is the proper way to support a newborn's head and neck?",
        options: ["Hold firmly under the chin to keep head up", "Support the head and neck together, allowing natural positioning", "Let the head move freely to strengthen neck muscles", "Keep the head elevated at all times"],
        correct: 1,
        explanation: "Always support both the head and neck together as one unit, allowing natural positioning while preventing the head from falling backward or to the side. Newborns have large, heavy heads relative to their body size and weak neck muscles that can't support the head's weight. Use one hand to cradle the back of the head and neck when lifting, carrying, or positioning. When laying baby down, support the head until it's resting on the surface. Avoid jerky movements or letting the head 'flop.' This support is needed for the first few months until neck muscles strengthen and head control develops, typically around 3-4 months.",
        difficulty: "easy",
        tags: ["newborn", "safety", "handling"]
    },
    {
        id: "baby_043",
        question: "How should parents respond to newborn congestion and sneezing?",
        options: ["Use decongestant medications immediately", "It's usually normal clearing of amniotic fluid and adaptation to air breathing", "Always indicates a serious respiratory infection", "Cover baby's face to prevent spreading illness"],
        correct: 1,
        explanation: "Mild congestion and sneezing in newborns is usually normal as they clear amniotic fluid from their airways and adapt to breathing air. Newborns are obligate nose breathers and have narrow nasal passages that can sound congested. Sneezing helps clear the nasal passages and is a normal reflex. However, be concerned about difficulty breathing, persistent coughing, fever, poor feeding, or changes in activity level. Use a bulb syringe or nasal aspirator with saline drops if needed for comfort during feeding or sleeping. Avoid medications unless prescribed. Maintain good hygiene and limit exposure to sick individuals.",
        difficulty: "medium",
        tags: ["newborn", "health", "breathing"]
    },
    {
        id: "baby_044",
        question: "What is the recommended approach to newborn immunizations?",
        options: ["Delay all vaccines until 6 months of age", "Follow the CDC-recommended schedule starting with Hepatitis B at birth", "Only give vaccines if baby shows signs of illness", "Wait until baby weighs at least 10 pounds"],
        correct: 1,
        explanation: "Follow the CDC-recommended immunization schedule, which typically begins with Hepatitis B vaccine within 24 hours of birth. Vaccines are most effective when given on schedule, and newborns are vulnerable to serious diseases that vaccines prevent. The schedule is designed based on when babies are most at risk and when their immune systems can best respond. Delaying vaccines leaves babies unprotected during vulnerable periods. Discuss any concerns with healthcare providers rather than delaying or skipping vaccines. Mild reactions like fussiness or low-grade fever are normal, but severe reactions should be reported immediately.",
        difficulty: "medium",
        tags: ["newborn", "health", "immunizations"]
    },
    {
        id: "baby_045",
        question: "How should parents manage newborn diaper rash prevention?",
        options: ["Use powder to keep area dry at all times", "Change diapers frequently, clean gently, and allow air drying when possible", "Apply thick layers of ointment after every change", "Use antibacterial wipes for thorough cleaning"],
        correct: 1,
        explanation: "Prevent diaper rash by changing diapers frequently (every 2-3 hours and immediately after soiling), cleaning gently with plain water or mild cleansers, patting dry, and allowing brief air drying when possible. Apply a thin protective barrier (zinc oxide or petroleum jelly) if skin appears irritated. Avoid powder, which can be inhaled and cause respiratory problems. Use fragrance-free, alcohol-free products. If rash develops, increase air exposure, change diapers more frequently, and use thicker barrier cream. Persistent, severe, or spreading rashes may indicate infection and require medical evaluation. Some babies have sensitive skin and need extra protection.",
        difficulty: "easy",
        tags: ["newborn", "health", "diaper care"]
    },
    {
        id: "baby_046",
        question: "What indicates proper newborn growth and development in the first month?",
        options: ["Sleeping through the night by 4 weeks", "Doubling birth weight by 1 month", "Regaining birth weight by 2 weeks and gaining 4-7 oz weekly thereafter", "Rolling over and holding head up steadily"],
        correct: 2,
        explanation: "Proper growth includes regaining birth weight by 10-14 days and then gaining approximately 4-7 ounces (113-200 grams) per week during the first few months. Length increases about 1 inch per month, and head circumference grows about 0.5 inches per month. Developmental milestones for the first month include brief head lifting during tummy time, following objects with eyes, responding to sounds, and beginning to focus on faces. Sleeping through the night and rolling over are not expected until much later. Regular weight checks, tracking feeding patterns, monitoring alertness and responsiveness, and observing physical development help assess proper growth.",
        difficulty: "medium",
        tags: ["newborn", "growth", "development"]
    },
    {
        id: "baby_047",
        question: "When is it appropriate to use a pacifier for a newborn?",
        options: ["Never use pacifiers as they cause dental problems", "Only during crying episodes to provide comfort", "After breastfeeding is well established (usually 3-4 weeks) and for sleep", "Immediately from birth to prevent thumb sucking"],
        correct: 2,
        explanation: "Introduce pacifiers after breastfeeding is well established (typically 3-4 weeks) to avoid nipple confusion. Pacifiers can reduce SIDS risk when used for sleep, provide comfort during procedures, and help satisfy sucking needs between feeds. Offer at sleep times but don't force if baby refuses. Remove once baby falls asleep to prevent dependency. Avoid using pacifiers to delay feedings or as first response to crying. Choose one-piece designs without small parts, clean regularly, and replace when worn. Gradually wean around 6-12 months to prevent dental issues. Some breastfed babies may never need or want pacifiers.",
        difficulty: "medium",
        tags: ["newborn", "soothing", "breastfeeding"]
    },
    {
        id: "baby_048",
        question: "What should parents know about newborn blood sugar regulation?",
        options: ["All newborns need sugar water supplements", "Blood sugar naturally stabilizes through frequent feeding", "Only premature babies have blood sugar concerns", "Blood sugar doesn't affect newborn behavior"],
        correct: 1,
        explanation: "Newborn blood sugar typically stabilizes through frequent feeding (every 2-3 hours) as the baby's metabolism adjusts to life outside the womb. Risk factors for low blood sugar include prematurity, small or large birth weight, maternal diabetes, birth stress, and poor feeding. Signs of low blood sugar include jitteriness, poor feeding, lethargy, irritability, and abnormal crying. Early, frequent feeding (especially breastfeeding) is the best prevention. Healthcare providers monitor at-risk babies closely and may check blood sugar levels. Most healthy, full-term babies regulate blood sugar well with appropriate feeding. Avoid unnecessary sugar supplements unless medically indicated.",
        difficulty: "medium",
        tags: ["newborn", "health", "feeding"]
    },
    {
        id: "baby_049",
        question: "How should parents approach newborn skin-to-skin contact?",
        options: ["Limit to prevent overstimulation and infection", "Practice frequently to promote bonding, temperature regulation, and breastfeeding", "Only in the delivery room for the first hour", "Wait until after the first bath to ensure cleanliness"],
        correct: 1,
        explanation: "Practice skin-to-skin contact frequently as it provides numerous benefits including temperature regulation, heart rate and breathing stabilization, blood sugar regulation, stress reduction, improved bonding, and breastfeeding success. Begin immediately after birth when possible and continue regularly throughout the newborn period. Both parents can provide skin-to-skin contact. Place baby (wearing only diaper) on parent's bare chest, cover both with blanket. This is safe and beneficial for stable babies and doesn't require waiting for bathing. Skin-to-skin contact can calm fussy babies, improve sleep, and support healthy development. Continue as long as it's enjoyable for both parent and baby.",
        difficulty: "easy",
        tags: ["newborn", "bonding", "breastfeeding"]
    },
    {
        id: "baby_050",
        question: "What characterizes normal newborn breathing patterns?",
        options: ["Completely regular rhythm like adults", "Occasional irregular patterns with brief pauses (less than 20 seconds)", "Consistently fast breathing above 60 breaths per minute", "Mouth breathing as the primary method"],
        correct: 1,
        explanation: "Normal newborn breathing includes occasional irregular patterns with brief pauses of less than 20 seconds (periodic breathing), respiratory rates of 30-60 breaths per minute, and primarily nose breathing. Newborns have immature respiratory control centers, leading to some irregularity that's completely normal. Be concerned about pauses longer than 20 seconds, persistent fast breathing over 60 breaths per minute, grunting, flaring nostrils, chest retractions, blue coloring around mouth or fingernails, or difficulty feeding due to breathing problems. These may indicate respiratory distress requiring medical attention. Normal variations include faster breathing during activity and slower during sleep.",
        difficulty: "medium",
        tags: ["newborn", "health", "breathing"]
    },
    {
        id: "baby_051",
        question: "When should parents be concerned about newborn muscle tone?",
        options: ["Any floppy or stiff movements in the first week", "Persistent floppiness, excessive stiffness, or asymmetrical movements", "Jerky movements during sleep", "Inability to lift head at birth"],
        correct: 1,
        explanation: "Be concerned about persistent floppiness (hypotonia), excessive stiffness (hypertonia), or asymmetrical movements that could indicate neurological issues. Normal newborn muscle tone includes some flexion (bent arms and legs), symmetrical movements, ability to briefly lift head during tummy time, and gradual increase in muscle strength. Newborns naturally have jerky movements and startle reflexes. Red flags include consistently limp or overly rigid posture, one-sided weakness, absence of normal reflexes, or unusual posturing. Early identification of muscle tone abnormalities is important for intervention. Healthcare providers assess muscle tone during routine exams and can differentiate normal variations from concerning findings.",
        difficulty: "hard",
        tags: ["newborn", "health", "development"]
    },
    {
        id: "baby_052",
        question: "What is the appropriate response to newborn acne or skin rashes?",
        options: ["Use acne medications designed for teenagers", "Most newborn skin conditions are temporary and resolve without treatment", "Scrub affected areas vigorously to prevent infection", "Apply antibiotic ointment to all rashes"],
        correct: 1,
        explanation: "Most newborn skin conditions including newborn acne, milia (small white bumps), and various rashes are temporary and resolve without treatment as hormones normalize and skin matures. Newborn acne typically appears around 2-3 weeks and resolves by 3-4 months. Milia (tiny white bumps) are blocked pores that disappear on their own. Gentle cleansing with water and mild baby soap is sufficient. Avoid scrubbing, picking, or using adult acne products which can irritate delicate skin. Heat rash, cradle cap, and eczema are other common conditions. Seek medical advice for persistent, worsening, or infected-appearing rashes, or if accompanied by fever or feeding difficulties.",
        difficulty: "easy",
        tags: ["newborn", "health", "skin care"]
    },
    {
        id: "baby_053",
        question: "How should parents handle newborn witching hour or evening fussiness?",
        options: ["Ignore the crying to teach self-soothing", "Feed constantly to ensure adequate nutrition", "Use calming techniques while understanding it's a normal developmental phase", "Keep baby awake during the day to prevent evening fussiness"],
        correct: 2,
        explanation: "Evening fussiness or 'witching hour' is common in newborns, typically occurring between 2-6 weeks of age and often lasting 2-3 hours in the evening. This is a normal developmental phase thought to be related to overstimulation, immature nervous system, or natural circadian rhythm development. Calming techniques include swaddling, gentle motion (rocking, bouncing), white noise, dimmed lights, and ensuring basic needs are met. The 5 S's (swaddling, side position, shushing, swinging, sucking) can be helpful. Tag-team with partner to prevent caregiver exhaustion. This phase typically resolves by 3-4 months as baby's nervous system matures.",
        difficulty: "medium",
        tags: ["newborn", "soothing", "development"]
    },
    {
        id: "baby_054",
        question: "What is the significance of newborn hearing screening?",
        options: ["It's optional since hearing problems are rare", "Early detection allows for intervention during critical language development period", "Only necessary if there's family history of hearing loss", "Can wait until baby is older and more cooperative"],
        correct: 1,
        explanation: "Newborn hearing screening is crucial because early detection and intervention during the critical language development period (first 6 months) significantly improves outcomes. About 1-3 per 1000 babies are born with hearing loss, making it one of the most common birth conditions. The screening uses otoacoustic emissions (OAE) or auditory brainstem response (ABR) tests that are painless and can be done while baby sleeps. If initial screening shows potential issues, follow-up testing confirms diagnosis. Early intervention with hearing aids, cochlear implants, or other support allows normal language development. Delays in identification can result in speech, language, and learning difficulties.",
        difficulty: "medium",
        tags: ["newborn", "health", "hearing"]
    },
    {
        id: "baby_055",
        question: "When should parents be concerned about newborn spitting up?",
        options: ["Any spitting up is abnormal and requires medical attention", "Projectile vomiting, blood in spit-up, or poor weight gain accompanying frequent spitting", "Only if baby spits up after every feeding", "Spitting up is never a concern in healthy newborns"],
        correct: 1,
        explanation: "Be concerned about projectile vomiting (forceful ejection across the room), blood in spit-up, bile-colored vomit, or poor weight gain with frequent spitting up. Normal spitting up is common due to immature lower esophageal sphincter and small stomach capacity. It typically peaks around 4 months and resolves by 12-14 months. Concerning signs include projectile vomiting (may indicate pyloric stenosis), blood or bile, excessive crying with spitting, poor weight gain, or respiratory symptoms. To reduce normal spitting: feed smaller amounts more frequently, burp regularly, keep baby upright after feeding, and avoid overstimulation after meals. Most babies who spit up frequently are 'happy spitters' who gain weight normally.",
        difficulty: "medium",
        tags: ["newborn", "health", "feeding"]
    },
    {
    id: "baby_056",
    question: "What is the proper approach to newborn nail care?",
    options: [
        "Use regular nail clippers immediately after birth",
        "File or trim carefully when baby is calm, supporting the finger securely",
        "Let nails grow naturally to avoid injury",
        "Bite nails short to prevent scratching"
    ],
    correct: 1,
    explanation: "Trim nails carefully when baby is calm (often during or after feeding), using baby nail clippers or scissors, and support each finger securely while cutting. Newborn nails grow quickly and can be sharp, leading to facial scratches. Cut fingernails weekly and toenails monthly. Trim straight across and slightly rounded at corners to prevent ingrown nails. Best times are when baby is sleepy or feeding. Use baby-specific nail care tools, not adult clippers. If accidentally nicking skin, apply gentle pressure with clean cloth and watch for signs of infection. Filing is gentler but may take longer. Mittens can prevent scratching but shouldn't be used continuously as hands are important for development.",
    difficulty: "easy",
    tags: ["newborn", "care", "safety"]
    },
    {
        id: "baby_057",
        question: "How should parents respond to newborn cluster feeding?",
        options: [
            "Limit feeding frequency to establish a schedule",
            "Worry that milk supply is inadequate",
            "Understand it's normal behavior that helps establish milk supply",
            "Supplement with formula to satisfy baby's hunger"
        ],
        correct: 2,
        explanation: "Cluster feeding is normal newborn behavior where babies feed frequently over several hours, often in the evening, and serves important purposes including establishing milk supply, providing comfort, and preparing for longer sleep periods. This is particularly common in breastfed babies and often occurs around growth spurts. Cluster feeding doesn't indicate inadequate milk supply - it actually helps increase supply through frequent stimulation. Signs of adequate intake include appropriate weight gain, sufficient wet diapers, and contentment between feeding sessions. During cluster feeding periods, focus on comfort, stay hydrated, and ask for support with other tasks. This pattern typically becomes more predictable as baby's feeding patterns mature.",
        difficulty: "medium",
        tags: ["newborn", "breastfeeding", "behavior"]
    },
    {
        id: "baby_058",
        question: "What characterizes normal newborn reflexes and when should parents be concerned?",
        options: [
            "All reflexes should be present and symmetrical from birth",
            "Reflexes are present but may vary in strength; absence or asymmetry warrants evaluation",
            "Reflexes aren't important for development assessment",
            "Strong reflexes indicate advanced development"
        ],
        correct: 1,
        explanation: "Normal newborn reflexes include Moro (startle), rooting, sucking, grasp, and stepping reflexes that should be present and symmetrical from birth. These reflexes indicate normal nervous system development and gradually disappear as voluntary control develops. Be concerned about absent reflexes, consistently asymmetrical responses, or persistence beyond expected timeframes. The Moro reflex should be symmetrical and present until 3-4 months. Rooting and sucking reflexes are crucial for feeding. Grasp reflex is strong initially and fades by 3-6 months. Absence of key reflexes or one-sided responses may indicate neurological issues requiring evaluation. Healthcare providers routinely assess reflexes during newborn exams.",
        difficulty: "medium",
        tags: ["newborn", "development", "health"]
    },
    {
        id: "baby_059",
        question: "What is the appropriate management of newborn cord blood collection?",
        options: [
            "Cord blood banking is mandatory for all births",
            "Collection is optional but should be discussed and decided before delivery",
            "Only useful for babies with known genetic conditions",
            "Can be collected any time in the first 24 hours"
        ],
        correct: 1,
        explanation: "Cord blood collection is optional but should be discussed and arrangements made before delivery if desired. Cord blood contains stem cells that can treat various blood disorders, immune deficiencies, and some cancers. Private banking stores blood for family use, while public donation makes it available for anyone in need. Collection must occur immediately after delivery before the cord stops pulsating. Consider factors like family medical history, cost of private banking, and likelihood of use. Public donation is free and altruistic. Delayed cord clamping (recommended practice) may affect collection volume but provides benefits to baby. Discuss options with healthcare providers during pregnancy.",
        difficulty: "medium",
        tags: ["birth", "medical", "planning"]
    },
    {
        id: "baby_060",
        question: "How should parents approach newborn phototherapy for jaundice?",
        options: [
            "Refuse treatment as it's unnecessary intervention",
            "Understand it's safe, effective treatment that prevents serious complications",
            "Only accept treatment in hospital settings",
            "Supplement with formula to speed recovery"
        ],
        correct: 1,
        explanation: "Phototherapy is safe, effective treatment for significant newborn jaundice that prevents serious complications like kernicterus (brain damage from high bilirubin). Special blue lights help break down bilirubin so it can be eliminated from the body. Treatment may be provided in hospital or at home with portable equipment. During treatment, baby's eyes are protected with patches, and they may need to be undressed except for diaper. Frequent feeding helps eliminate bilirubin through urine and stool. Monitor for adequate hydration and continued feeding. Some parents worry about light exposure, but phototherapy lights are specifically designed for this purpose. Follow healthcare provider recommendations and continue breastfeeding throughout treatment.",
        difficulty: "medium",
        tags: ["newborn", "health", "medical"]
    },
    {
        id: "baby_061",
        question: "What should parents know about newborn growth spurts?",
        options: [
            "They occur at unpredictable times and vary between babies",
            "Growth spurts typically occur around 2-3 weeks, 6 weeks, and 3 months",
            "Only formula-fed babies experience growth spurts",
            "Growth spurts are concerning and indicate overfeeding"
        ],
        correct: 1,
        explanation: "Growth spurts commonly occur around 2-3 weeks, 6 weeks, 3 months, and 6 months, but timing varies between babies. During growth spurts, babies may feed more frequently, be fussier than usual, and have disrupted sleep patterns. This increased feeding helps boost milk supply in breastfeeding mothers and supports rapid physical development. Growth spurts typically last 2-3 days to a week. Both breastfed and formula-fed babies experience growth spurts, though feeding patterns may differ. Signs include increased hunger, more frequent feeding, temporary fussiness, and increased sleep after the growth spurt. This is completely normal and not a sign of overfeeding. Trust baby's cues and feed responsively during these periods.",
        difficulty: "easy",
        tags: ["newborn", "development", "feeding"]
    },
    {
        id: "baby_062",
        question: "When is it appropriate to take a newborn out in public?",
        options: [
            "Never before 6 months to avoid all infections",
            "After 2 months when immune system is stronger",
            "Cautiously after first pediatric visit, avoiding crowded places and sick contacts",
            "Immediately after birth with no restrictions"
        ],
        correct: 2,
        explanation: "Take newborns out cautiously after their first pediatric visit (usually 3-5 days after birth), avoiding crowded places, sick contacts, and unnecessary exposure during the first 6-8 weeks when immune systems are most vulnerable. Fresh air and gentle outings can be beneficial for both baby and parents' mental health. Choose less crowded times and places, avoid people who are sick, and limit contact with many different people. Newborns are particularly susceptible to RSV, pertussis, and other respiratory infections. Use infant car seats properly, dress appropriately for weather, and ensure feeding and diaper changing needs can be met. Trust instincts about situations that feel too risky, and don't hesitate to leave if baby becomes overstimulated.",
        difficulty: "medium",
        tags: ["newborn", "safety", "health"]
    },
    {
        id: "baby_063",
        question: "What is the significance of newborn metabolic screening?",
        options: [
            "It's optional testing for rare conditions",
            "Screens for treatable conditions that can cause serious problems if undetected",
            "Only necessary for babies with family history of genetic conditions",
            "Can be delayed until baby is older"
        ],
        correct: 1,
        explanation: "Newborn metabolic screening (heel stick blood test) screens for treatable conditions that can cause intellectual disability, organ damage, or death if undetected and untreated. The screening tests for conditions like phenylketonuria (PKU), hypothyroidism, cystic fibrosis, and sickle cell disease. These conditions are rare but serious, and early detection allows for treatment that prevents complications. The test is typically done 24-48 hours after birth and may be repeated if initial results are abnormal. Most babies have normal results, but early identification saves lives and prevents disability. Each state has its own screening panel, testing for 30+ conditions. This is one of the most important preventive health measures for newborns.",
        difficulty: "medium",
        tags: ["newborn", "health", "medical"]
    },
    {
        id: "baby_064",
        question: "How should parents handle newborn sleep safety in different environments?",
        options: [
            "Maintain same safety standards regardless of location",
            "Relax safety rules temporarily when traveling or visiting",
            "Only follow safety guidelines in the baby's permanent nursery",
            "Use adult beds when cribs aren't available"
        ],
        correct: 0,
        explanation: "Maintain the same sleep safety standards regardless of location - at home, visiting relatives, traveling, or in temporary sleeping arrangements. Safe sleep principles include back sleeping, firm sleep surface, no loose bedding or toys, and avoiding overheating. When traveling, bring portable play yards or ensure accommodation has safe sleep options. Avoid adult beds, couches, or soft surfaces even temporarily. If staying with relatives, educate them about current safe sleep guidelines which may differ from their past practices. Pack sleep sacks instead of blankets, and maintain consistent sleep routines. Safe sleep reduces SIDS risk and should never be compromised for convenience. Plan ahead for safe sleep arrangements in any environment.",
        difficulty: "medium",
        tags: ["newborn", "sleep", "safety"]
    },
    {
        id: "baby_065",
        question: "What should parents understand about newborn vision development?",
        options: [
            "Newborns can see clearly at all distances from birth",
            "Vision is blurry initially, focusing best at 8-12 inches with gradual improvement",
            "Babies can't see anything until 6 months of age",
            "Color vision is fully developed at birth"
        ],
        correct: 1,
        explanation: "Newborn vision is blurry initially, with best focus at 8-12 inches (about the distance to parent's face during feeding). Babies can see light, shapes, and movement but lack sharp focus and color discrimination initially. They prefer high-contrast patterns, faces, and moving objects. Color vision develops gradually, with full color discrimination by 3-4 months. Eye coordination improves over the first few months - occasional crossing or wandering is normal initially but should resolve by 3-4 months. Provide visual stimulation with high-contrast toys, books, and faces. Concerning signs include persistent eye crossing after 4 months, lack of visual tracking, or absence of response to visual stimuli. Regular pediatric eye exams help detect vision problems early.",
        difficulty: "easy",
        tags: ["newborn", "development", "senses"]
    },
    {
        id: "baby_066",
        question: "How should parents approach newborn crying and colic?",
        options: [
            "All crying indicates hunger or discomfort that must be fixed",
            "Colic is normal fussiness that resolves on its own without intervention",
            "Use systematic approach to identify and address causes while managing parental stress",
            "Medication is necessary for babies who cry excessively"
        ],
        correct: 2,
        explanation: "Use a systematic approach to identify and address potential causes (hunger, discomfort, tiredness, overstimulation) while managing parental stress and understanding that some crying is normal. Colic affects about 20% of babies, typically beginning around 2-3 weeks, peaking at 6 weeks, and resolving by 3-4 months. Characteristics include crying for more than 3 hours daily, more than 3 days per week, for more than 3 weeks in an otherwise healthy baby. Try calming techniques like the 5 S's, but also recognize when baby needs to cry. Take breaks when overwhelmed - it's safe to put baby in crib and step away briefly. Seek support from family, friends, or professionals. Rule out medical causes if crying seems excessive or different from usual patterns.",
        difficulty: "medium",
        tags: ["newborn", "behavior", "colic"]
    },
    {
        id: "baby_067",
        question: "What is the importance of newborn head shape monitoring?",
        options: [
            "Head shape variations are always concerning and need treatment",
            "Monitor for positional plagiocephaly and encourage varied positioning",
            "Head shape doesn't matter as long as baby is developing normally",
            "Only worry about head shape if baby isn't gaining weight"
        ],
        correct: 1,
        explanation: "Monitor for positional plagiocephaly (flat head syndrome) and encourage varied positioning to promote normal head shape development. Newborns' skulls are soft and moldable, making them susceptible to flattening from prolonged pressure in one position. Risk factors include back sleeping (which is still recommended for SIDS prevention), limited tummy time, torticollis, and multiple births. Prevention includes supervised tummy time when awake, alternating head position during sleep, limiting time in car seats and bouncy seats when not traveling, and encouraging different positions during feeding and play. Mild flattening often improves with positioning changes, but severe cases may require helmet therapy. Early intervention is most effective, so discuss concerns with healthcare providers.",
        difficulty: "medium",
        tags: ["newborn", "development", "health"]
    },
    {
        id: "baby_068",
        question: "How should parents handle newborn medication administration?",
        options: [
            "Give adult medications in smaller doses for safety",
            "Only give medications specifically prescribed for the baby with exact dosing",
            "Use over-the-counter medications as needed for comfort",
            "Avoid all medications until baby is at least 6 months old"
        ],
        correct: 1,
        explanation: "Only give medications specifically prescribed for your baby with exact dosing as directed by healthcare providers. Never give adult medications, over-the-counter medications, or adjust doses without medical supervision. Newborns have immature liver and kidney function, making them more susceptible to medication toxicity. Even seemingly harmless medications like acetaminophen can be dangerous in wrong doses or if given too frequently. Always use measuring devices provided with medications or syringes from pharmacy - never use household spoons. Store medications safely away from children and other family members. Keep a list of all medications and supplements baby receives. Contact healthcare providers before giving any new medications, even those recommended by well-meaning family or friends.",
        difficulty: "hard",
        tags: ["newborn", "medical", "safety"]
    },
    {
        id: "baby_069",
        question: "What should parents know about newborn car seat safety?",
        options: [
            "Any infant car seat will work as long as it's new",
            "Proper installation, positioning, and usage are critical for safety",
            "Car seats aren't necessary for short trips",
            "Babies can face forward once they seem uncomfortable rear-facing"
        ],
        correct: 1,
        explanation: "Proper installation, positioning, and usage are critical for newborn car seat safety. Newborns must ride rear-facing in properly installed infant car seats until at least 2 years old or until they reach the maximum height/weight limits. The harness should be at or below shoulder level, with chest clip at armpit level, and harness snug enough that you cannot pinch any slack. The car seat should be installed at correct angle (usually 30-45 degrees) to keep baby's airway open. Never place rear-facing seats in front of active airbags. Avoid aftermarket products like strap covers or head supports not made by car seat manufacturer. Have installation checked by certified technician. Never leave baby in car seat longer than necessary, as prolonged positioning can affect breathing.",
        difficulty: "medium",
        tags: ["newborn", "safety", "car"]
    },
    {
        id: "baby_070",
        question: "When should parents be concerned about newborn feeding refusal?",
        options: [
            "Any missed feeding requires immediate medical attention",
            "Consistent refusal, signs of dehydration, or poor weight gain warrant evaluation",
            "Newborns naturally refuse feeds sometimes without concern",
            "Only worry if baby hasn't eaten in 24 hours"
        ],
        correct: 1,
        explanation: "Be concerned about consistent feeding refusal, signs of dehydration (fewer wet diapers, dry mouth, lethargy), poor weight gain, or changes in baby's usual feeding pattern. Occasional feeding refusal can be normal, especially if baby is sleepy or overstimulated, but persistent refusal needs evaluation. Signs warranting immediate attention include refusing multiple consecutive feeds, signs of dehydration, excessive sleepiness, difficulty waking for feeds, or weak suck. Possible causes include illness, oral thrush, reflux, or other medical conditions. Try different feeding positions, ensure appropriate feeding environment, and check for signs of illness. Newborns need regular nutrition for proper growth and development, so don't wait too long to seek help if feeding refusal persists.",
        difficulty: "medium",
        tags: ["newborn", "feeding", "health"]
    },
    {
        id: "baby_071",
        question: "What is the significance of newborn vitamin K administration?",
        options: [
            "It's unnecessary if mother has adequate nutrition",
            "Prevents serious bleeding disorders that can occur in newborns",
            "Only needed for premature babies",
            "Can be delayed until baby is older"
        ],
        correct: 1,
        explanation: "Vitamin K injection prevents serious bleeding disorders (hemorrhagic disease of the newborn) that can occur because newborns have naturally low vitamin K levels and immature clotting systems. Vitamin K is essential for blood clotting, and newborns are born with limited stores. Serious bleeding can occur in the brain, intestines, or other organs without warning. The injection is given shortly after birth and is highly effective at preventing these potentially fatal bleeding episodes. Oral vitamin K is less effective than injection. This is standard care recommended by pediatric organizations worldwide. Vitamin K deficiency bleeding is rare but serious, and prevention is simple and safe. The injection may cause brief discomfort but provides crucial protection.",
        difficulty: "medium",
        tags: ["newborn", "medical", "health"]
    },
    {
        id: "baby_072",
        question: "What is the most reliable sign that active labor has begun?",
        options: [
            "Regular contractions every 20 minutes",
            "Mucus plug discharge",
            "Regular, strong contractions that don't stop with rest or position changes",
            "Breaking of water (rupture of membranes)"
        ],
        correct: 2,
        explanation: "Active labor is characterized by regular, strong contractions that continue despite rest, position changes, or warm baths. These contractions become progressively stronger, longer, and closer together, typically occurring every 3-5 minutes and lasting 45-60 seconds. Unlike Braxton Hicks contractions, true labor contractions cause progressive cervical dilation. The mucus plug can be lost days or weeks before labor begins, and only 10-15% of women experience membrane rupture before labor starts. While water breaking can signal labor onset, contractions may not immediately follow. The key distinction is that true labor contractions intensify over time and cannot be stopped by rest or activity changes, making them the most reliable indicator of active labor.",
        difficulty: "medium",
        tags: ["labor-delivery", "birth-prep"]
    },
    {
        id: "baby_073",
        question: "Which pain relief option during labor provides the most complete pain relief while allowing the mother to remain alert?",
        options: [
            "Nitrous oxide (laughing gas)",
            "IV narcotic medications",
            "Epidural anesthesia",
            "Natural breathing techniques"
        ],
        correct: 2,
        explanation: "Epidural anesthesia typically provides the most complete pain relief during labor while allowing mothers to remain conscious, alert, and able to participate actively in delivery. The epidural blocks pain signals from the uterus and birth canal while preserving mental clarity and the ability to communicate. However, effectiveness can vary, and some women may still feel pressure during pushing. Epidurals may slightly prolong labor and increase the likelihood of assisted delivery. Nitrous oxide provides mild to moderate pain relief but doesn't eliminate pain completely. IV narcotics can cause drowsiness and may affect the baby if given close to delivery. It's important to note that epidurals aren't available in all birth settings, and the decision should be made based on individual circumstances and preferences.",
        difficulty: "medium",
        tags: ["labor-delivery", "birth-prep"]
    },
    {
        id: "baby_074",
        question: "How long does the third stage of labor (delivery of the placenta) typically last?",
        options: [
            "30 seconds to 2 minutes",
            "5-30 minutes",
            "1-2 hours",
            "2-4 hours"
        ],
        correct: 1,
        explanation: "The third stage of labor, from baby's birth to placenta delivery, typically lasts 5-30 minutes. During this stage, the uterus contracts to separate and expel the placenta. Signs of placental separation include a gush of blood, cord lengthening, and the uterus becoming firm and globular. Healthcare providers may use gentle cord traction or uterine massage to assist delivery, but forceful pulling can cause dangerous complications like uterine inversion. A third stage exceeding 30 minutes is considered prolonged and may require medical intervention to prevent hemorrhage. Active management with medications like oxytocin can reduce bleeding risk and duration. Complete placental delivery is crucial - retained placental fragments can cause severe bleeding and infection, requiring immediate medical attention.",
        difficulty: "easy",
        tags: ["labor-delivery", "postpartum"]
    },
    {
        id: "baby_075",
        question: "What is the typical duration of the second stage of labor (pushing stage) for first-time mothers?",
        options: [
            "15-30 minutes",
            "30 minutes to 2 hours",
            "2-4 hours", 
            "4-6 hours"
        ],
        correct: 1,
        explanation: "The second stage of labor (from full cervical dilation to baby's birth) typically lasts 30 minutes to 2 hours for first-time mothers, though it can extend to 3 hours or more and still be considered normal, especially with epidural anesthesia which can naturally prolong this stage. For mothers who have given birth before, this stage is usually shorter, lasting 20 minutes to 1 hour. The duration depends on factors including baby's position and size, maternal position during pushing, epidural use, and individual anatomy. Healthcare providers may suggest different positions, breathing techniques, or rest periods between pushes to optimize progress and reduce perineal trauma. There's no single 'correct' way to push - some women benefit from directed pushing while others prefer to follow their body's natural urges.",
        difficulty: "medium",
        tags: ["labor-delivery"]
    },
    {
        id: "baby_076", 
        question: "What should you do if your water breaks before contractions begin?",
        options: [
            "Wait at home until contractions start",
            "Take a bath to relax",
            "Contact your healthcare provider and prepare to go to the hospital",
            "Walk around to encourage labor to start"
        ],
        correct: 2,
        explanation: "If your water breaks before contractions begin, contact your healthcare provider immediately and prepare to go to the hospital, even without contractions. Once membranes rupture, there's increased infection risk because the protective barrier around the baby is compromised. Most providers recommend delivery within 12-24 hours of membrane rupture, though timing may vary based on Group B Strep status and other factors. Avoid baths, tampons, or anything inserted vaginally once water breaks. Note the time, color, and amount of fluid - clear or slightly pink fluid is normal, but green, brown, or foul-smelling fluid requires immediate medical attention. About 85% of women will begin labor naturally within 24 hours of water breaking, but monitoring ensures both mother and baby remain safe.",
        difficulty: "easy",
        tags: ["labor-delivery", "birth-prep"]
    },
    {
        id: "baby_077",
        question: "Which situation most commonly leads to an unplanned cesarean delivery during labor?",
        options: [
            "Baby being in breech position", 
            "Mother requesting pain medication",
            "Labor failing to progress despite strong, regular contractions",
            "Baby being larger than average"
        ],
        correct: 2,
        explanation: "Failure to progress (dystocia) is the most common reason for unplanned cesarean delivery during labor, accounting for about 30-40% of first-time cesarean births. This occurs when labor stalls despite strong, regular contractions, often due to baby's head not fitting through the pelvis, abnormal fetal positioning, or cervical factors. True failure to progress is diagnosed only after adequate time and strong contractions - modern obstetric care allows sufficient time before determining cesarean necessity. Breech position is usually identified before labor and delivery method planned accordingly. Baby's estimated size alone rarely necessitates cesarean unless combined with other complications. Pain medication requests don't lead to cesarean delivery. When cesarean becomes necessary for medical reasons, it's a safe procedure that prioritizes the health of both mother and baby.",
        difficulty: "medium", 
        tags: ["labor-delivery", "birth-prep"]
    },
    {
        id: "baby_078",
        question: "What does it mean when healthcare providers say the baby is having 'variable decelerations' during labor monitoring?",
        options: [
            "The baby's heart rate is consistently too fast",
            "The baby's heart rate drops irregularly, often due to cord compression", 
            "The baby's heart rate is perfectly normal",
            "The baby's heart rate drops consistently with each contraction"
        ],
        correct: 1,
        explanation: "Variable decelerations are irregular drops in the baby's heart rate that vary in timing, depth, and duration, most commonly caused by umbilical cord compression during uterine contractions. Unlike other patterns, variable decelerations are unpredictable and don't follow a consistent pattern with contractions. Mild, brief variable decelerations are relatively common and usually not concerning, especially if the heart rate quickly returns to normal baseline. However, severe or prolonged variable decelerations may indicate significant cord compression requiring interventions such as maternal position changes, oxygen administration, or amnioinfusion (fluid replacement around the baby). Continuous fetal monitoring allows healthcare providers to distinguish between normal heart rate variations and patterns requiring immediate attention to ensure baby's safety during labor.",
        difficulty: "hard",
        tags: ["labor-delivery"]
    },
    {
        id: "baby_079",
        question: "What is 'back labor' and what can help relieve it?",
        options: [
            "Labor that starts in the back muscles; treated with bed rest",
            "Painful contractions felt primarily in the lower back; helped by position changes and counter-pressure",
            "Labor that progresses backwards; requires cesarean delivery", 
            "Normal labor pain that radiates to the back; no special treatment needed"
        ],
        correct: 1,
        explanation: "Back labor refers to intense pain felt primarily in the lower back during contractions, usually caused by the baby being in occiput posterior (OP) position where the back of the baby's head presses against the mother's spine. This occurs in about 15-30% of labors and can make contractions significantly more painful. Relief techniques include frequent position changes (hands and knees, side-lying, squatting), applying counter-pressure to the lower back, using warm compresses, water immersion, and staying mobile through walking or swaying. Many OP babies naturally rotate to the normal anterior position during labor, allowing for normal vaginal delivery. While back labor tends to be more intense and may last longer, most babies can still be delivered vaginally with appropriate support, positioning, and pain management techniques.",
        difficulty: "medium",
        tags: ["labor-delivery", "birth-prep"]
    },
    {
        id: "baby_080",
        question: "Which is the most common medical reason for inducing labor?",
        options: [
            "Mother's request for convenience",
            "Post-term pregnancy (42+ weeks)", 
            "Baby measuring large on ultrasound",
            "High blood pressure in pregnancy (preeclampsia)"
        ],
        correct: 3,
        explanation: "High blood pressure disorders, particularly preeclampsia, are among the most common medical indications for labor induction because they pose serious risks to both mother and baby if pregnancy continues. The timing depends on severity - mild cases may be monitored while severe preeclampsia requires prompt delivery. Post-term pregnancy (42+ weeks) is also a frequent indication. Large baby size alone is controversial as an induction reason unless combined with maternal diabetes or other complications. Convenience induction without medical indication is generally discouraged due to increased risks. Other common medical reasons include gestational diabetes, decreased fetal movement, oligohydramnios (low amniotic fluid), and prelabor rupture of membranes. Induction success depends on cervical readiness - a favorable cervix increases the likelihood of vaginal delivery while an unfavorable cervix may lead to cesarean.",
        difficulty: "medium",
        tags: ["labor-delivery"]
    },
    {
        id: "baby_081",
        question: "If a pregnant woman tests positive for Group B Strep, what happens during labor?",
        options: [
            "Labor must be induced immediately",
            "She receives IV antibiotics during labor",
            "A cesarean delivery is required", 
            "No special treatment is needed"
        ],
        correct: 1,
        explanation: "Women who test positive for Group B Strep (GBS) receive IV antibiotics during labor to prevent transmission to the baby. GBS is a common bacteria carried by 10-30% of pregnant women that's harmless to adults but can cause serious infections in newborns if transmitted during delivery. The standard treatment is penicillin or ampicillin given intravenously every 4 hours during labor until birth. Antibiotics are most effective when given at least 4 hours before delivery, which is why it's important to get to the hospital promptly when labor begins. GBS status doesn't require cesarean delivery or immediate induction unless other complications exist. Women with unknown GBS status may also receive antibiotics if they have risk factors like prolonged membrane rupture, fever during labor, or preterm delivery. This simple intervention reduces early-onset GBS disease risk in babies by over 80%.",
        difficulty: "easy",
        tags: ["labor-delivery"]
    },
    {
        id: "baby_082", 
        question: "What is delayed cord clamping and why is it recommended?",
        options: [
            "Waiting 10-15 minutes before cutting the cord to allow complete blood transfer",
            "Waiting 1-3 minutes before cutting the cord to allow additional blood flow to baby",
            "Never cutting the cord and leaving it attached",
            "Cutting the cord immediately but waiting to remove the placenta"
        ],
        correct: 1,
        explanation: "Delayed cord clamping involves waiting 1-3 minutes (or until cord pulsing stops) before clamping and cutting the umbilical cord, allowing continued blood flow from placenta to baby. This practice increases the baby's blood volume by about 30%, providing crucial iron stores that help prevent anemia in the first 4-6 months of life. The additional blood also contains stem cells and other beneficial components that support the baby's immune system and organ function. Delayed clamping is now recommended for both full-term and preterm babies unless immediate resuscitation is required. The cord typically stops pulsing within 2-3 minutes of birth. While this practice may slightly increase jaundice risk, the iron and health benefits significantly outweigh this minor concern. It doesn't interfere with cord blood banking if families choose this option.",
        difficulty: "medium",
        tags: ["labor-delivery", "newborn"]
    },
    {
        id: "baby_083",
        question: "When might an episiotomy (surgical cut to enlarge the vaginal opening) be performed during delivery?",
        options: [
            "Routinely for all first-time mothers",
            "Only when baby or mother is in distress and delivery needs to be expedited",
            "Whenever the baby weighs more than 8 pounds",
            "To prevent any tearing during delivery"
        ],
        correct: 1,
        explanation: "Episiotomies are now performed only when medically necessary, such as when the baby or mother is in distress requiring rapid delivery, or when operative delivery with forceps or vacuum is needed. This represents a major change from past decades when episiotomies were routine for first-time mothers. Current evidence shows that natural tears often heal better than surgical cuts, cause less pain, and have fewer long-term complications. Episiotomies don't prevent severe tears and may actually increase the risk of extending into more serious injuries. Most women, including first-time mothers, can deliver safely without episiotomy. Baby's weight alone doesn't determine episiotomy need. Modern obstetric practice focuses on perineal support techniques like warm compresses, controlled delivery of the baby's head, and perineal massage to reduce tearing risk naturally while preserving tissue integrity.",
        difficulty: "medium",
        tags: ["labor-delivery"]
    },
    {
        id: "baby_084",
        question: "What is umbilical cord prolapse and why is it considered an obstetric emergency?",
        options: [
            "The cord wrapping around the baby's neck during delivery",
            "The cord coming out before the baby, potentially cutting off blood supply",
            "The cord being shorter than normal",
            "The cord having only two vessels instead of three"
        ],
        correct: 1,
        explanation: "Umbilical cord prolapse occurs when the umbilical cord slips through the cervix ahead of the baby, becoming compressed between the baby's body and the birth canal, potentially cutting off the baby's oxygen supply. This rare emergency (occurring in less than 1% of pregnancies) requires immediate cesarean delivery to prevent serious complications. Risk factors include breech presentation, twins or multiples, excess amniotic fluid, and premature membrane rupture. When prolapse occurs, the mother is immediately positioned (usually knee-chest position) to relieve pressure on the cord, and healthcare providers may manually support the baby's head off the cord until emergency surgery. This differs from nuchal cord (cord around baby's neck), which is common and usually manageable during delivery. While cord prolapse is frightening, prompt recognition and intervention by trained medical staff typically result in good outcomes for both mother and baby.",
        difficulty: "hard",
        tags: ["labor-delivery", "special"]
    },
    {
        id: "baby_085",
        question: "What is the most reliable way to distinguish true labor contractions from Braxton Hicks contractions?",
        options: ["True labor contractions are always more painful", "True labor contractions get stronger and closer together over time", "True labor contractions only occur at night", "True labor contractions always start in the back"],
        correct: 1,
        explanation: "True labor contractions follow a progressive pattern - they become stronger, longer, and closer together over time, while Braxton Hicks contractions remain irregular and don't intensify. True labor contractions typically start 15-20 minutes apart and gradually decrease to 3-5 minutes apart. They don't stop with rest, position changes, or hydration, unlike Braxton Hicks which often subside with these measures. Pain level varies greatly between individuals, so intensity alone isn't reliable. The '5-1-1 rule' (contractions 5 minutes apart, lasting 1 minute, for 1 hour) is a common guideline for when to head to the hospital. Timing contractions for an hour helps distinguish the pattern.",
        difficulty: "medium",
        tags: ["labor-delivery"]
    },
    {
        id: "baby_086",
        question: "What characterizes the transition phase of labor?",
        options: ["Contractions are 10-15 minutes apart and mild", "The cervix dilates from 8-10 cm with intense contractions", "The baby crowns and delivery is imminent", "Contractions stop completely for 30-60 minutes"],
        correct: 1,
        explanation: "Transition is the final part of the first stage of labor when the cervix dilates from 8-10 cm, typically lasting 30 minutes to 2 hours. Contractions are most intense, occurring every 2-3 minutes and lasting 60-90 seconds. Women often experience nausea, vomiting, shaking, irritability, and may feel like they can't continue. This is often the most challenging part of labor, but it signals that full dilation and pushing are near. Many women report feeling panicky or out of control during transition. Partners and support people should provide continuous encouragement, as this phase, while intense, is relatively short and indicates significant progress toward delivery.",
        difficulty: "medium",
        tags: ["labor-delivery"]
    },
    {
        id: "baby_087",
        question: "Which situation requires immediate hospital evaluation during labor?",
        options: ["Contractions 10 minutes apart for 2 hours", "Mucus plug loss with pink tinge", "Sudden gush of clear fluid followed by regular contractions", "Bright red bleeding soaking a pad per hour"],
        correct: 3,
        explanation: "Heavy bright red bleeding (not just bloody show) is a medical emergency that could indicate placental abruption or other serious complications requiring immediate evaluation. Bloody show is normal - a small amount of pink or brown-tinged mucus. Clear fluid usually indicates rupture of membranes, which requires evaluation within 12-24 hours if contractions don't start. Contractions 10 minutes apart are early labor for most women. The general rule for hospital admission is the 5-1-1 pattern (5 minutes apart, 1 minute long, for 1 hour), but each situation is individual. Other emergency signs include fever, severe persistent headache, vision changes, or decreased fetal movement.",
        difficulty: "hard",
        tags: ["labor-delivery", "health"]
    },
    {
        id: "baby_088",
        question: "Which labor position is most effective for helping the baby rotate through the pelvis?",
        options: ["Lying flat on back", "Hands and knees position", "Semi-sitting with legs elevated", "Standing with legs crossed"],
        correct: 1,
        explanation: "The hands and knees position is highly effective for encouraging fetal rotation, particularly when the baby is in an occiput posterior (OP or 'sunny-side up') position. This position uses gravity to help the baby's heaviest part (the back of the head) rotate toward the mother's front, while taking pressure off her back. It also opens the pelvis and can relieve back pain common with OP positioning. Swaying, rocking, or doing pelvic tilts in this position can further encourage rotation. Other helpful positions include side-lying, squatting, and walking. Lying flat on the back can compress major blood vessels and make contractions less effective, so it's generally avoided during active labor.",
        difficulty: "medium",
        tags: ["labor-delivery"]
    },
    {
        id: "baby_089",
        question: "How long should the umbilical cord pulsate before clamping in a healthy full-term delivery?",
        options: ["30 seconds to 1 minute", "1-3 minutes", "5-10 minutes", "Until the placenta delivers"],
        correct: 1,
        explanation: "Delayed cord clamping for 1-3 minutes allows continued blood flow from the placenta, providing the baby with additional blood volume (up to 30% more) and iron stores that can prevent anemia in the first year. The cord should be clamped after pulsation stops or significantly decreases, typically within 1-3 minutes. This practice is recommended by major medical organizations for healthy term babies. Benefits include improved iron stores, better blood volume, and potentially improved neurodevelopmental outcomes. However, immediate clamping may be necessary if the baby needs resuscitation or if there are complications like heavy maternal bleeding. The cord blood can still be collected for banking even with delayed clamping.",
        difficulty: "medium",
        tags: ["labor-delivery", "newborn"]
    },
    {
        id: "baby_090",
        question: "What should women expect regarding mobility after receiving an epidural during labor?",
        options: ["Complete paralysis from the waist down", "Normal walking ability throughout labor", "Limited mobility but can change positions in bed", "Must remain flat on back until delivery"],
        correct: 2,
        explanation: "Modern epidurals typically allow limited mobility - women can change positions in bed, shift from side to side, and may be able to stand with assistance, though walking is usually restricted for safety. 'Walking epidurals' use lower concentrations of medication, preserving more leg strength while providing pain relief. Complete paralysis is not the goal and suggests the epidural is too strong. Women must remain in bed for safety due to decreased sensation and balance, but they're not required to stay flat - position changes are encouraged to help labor progress. Nurses help with repositioning every 1-2 hours. The ability to feel pressure and the urge to push is usually maintained, though sensation varies by individual and medication concentration.",
        difficulty: "medium",
        tags: ["labor-delivery"]
    },
    {
        id: "baby_091",
        question: "What does it mean when fetal heart rate monitoring shows 'late decelerations' during labor?",
        options: ["The baby's heart rate increases after each contraction", "The baby's heart rate drops after the contraction peaks", "The baby's heart rate remains steady throughout contractions", "The baby's heart rate fluctuates randomly"],
        correct: 1,
        explanation: "Late decelerations occur when the fetal heart rate drops after the peak of a contraction and returns to baseline after the contraction ends. This pattern suggests the baby may not be getting enough oxygen during contractions, possibly due to placental insufficiency or cord compression. Late decelerations are considered concerning and may require interventions like maternal position changes, oxygen administration, IV fluids, or possibly emergency delivery if persistent. Early decelerations (dropping with contraction start) are usually normal, caused by fetal head compression. Variable decelerations (irregular timing) often indicate cord compression. Continuous monitoring helps healthcare providers identify patterns and respond appropriately to ensure fetal well-being.",
        difficulty: "hard",
        tags: ["labor-delivery", "health"]
    },
    {
        id: "baby_092",
        question: "What is the most effective pushing technique during the second stage of labor?",
        options: ["Hold breath and push for 10 seconds with each contraction", "Push continuously throughout each contraction", "Push only when feeling the urge, following the body's natural rhythm", "Push between contractions when resting"],
        correct: 2,
        explanation: "Spontaneous pushing (following the body's natural urge) is generally more effective and less tiring than directed pushing. This technique involves pushing when the urge is felt, typically 3-4 times per contraction for 5-6 seconds each time, while breathing naturally. Extended breath-holding (Valsalva maneuver) can reduce oxygen to the baby and exhaust the mother. Research shows that delayed pushing (waiting until the urge is felt, even if fully dilated) can shorten pushing time and reduce complications. The pushing stage averages 1-3 hours for first-time mothers, 30 minutes to 2 hours for experienced mothers. Position changes, such as squatting or side-lying, can be more effective than lying flat.",
        difficulty: "medium",
        tags: ["labor-delivery"]
    },
    {
        id: "baby_093",
        question: "What is shoulder dystocia and how is it typically managed?",
        options: ["When the baby's head delivers but shoulders get stuck", "When the baby is born feet-first", "When the umbilical cord wraps around the baby's neck", "When labor stops progressing in the first stage"],
        correct: 0,
        explanation: "Shoulder dystocia occurs when the baby's head delivers but the shoulders become stuck behind the mother's pubic bone, preventing delivery of the body. This is a medical emergency requiring immediate intervention to prevent injury to both mother and baby. Management includes specific maneuvers like the McRoberts position (flexing mother's knees to chest), suprapubic pressure, episiotomy if needed, and internal rotation techniques. The condition occurs in 0.6-1.4% of deliveries and is more common with larger babies, maternal diabetes, or prolonged second stage. Quick recognition and appropriate maneuvers usually resolve the situation within minutes. Risk factors include previous shoulder dystocia, gestational diabetes, and estimated fetal weight over 4000g, though it can occur unexpectedly.",
        difficulty: "hard",
        tags: ["labor-delivery", "special"]
    },
    {
        id: "baby_094",
        question: "Which situation most commonly requires an emergency cesarean delivery during labor?",
        options: ["Baby measuring large on ultrasound", "Mother's blood pressure slightly elevated", "Fetal heart rate showing persistent concerning patterns", "Labor progressing slower than average"],
        correct: 2,
        explanation: "Persistent fetal heart rate abnormalities indicating fetal distress are among the most common reasons for emergency cesarean delivery during labor. Non-reassuring fetal heart patterns, such as persistent late decelerations, severe variable decelerations, or prolonged bradycardia, suggest the baby isn't tolerating labor well and needs immediate delivery. Other emergency indications include cord prolapse, placental abruption, or failure to progress after adequate time and interventions. Large baby size alone isn't typically an emergency indication unless combined with labor complications. Slightly elevated blood pressure can often be managed with monitoring and medication. Slow labor progress is addressed with interventions like position changes, IV fluids, or oxytocin before considering surgery. Emergency cesareans are performed when continuing labor poses risks to mother or baby that outweigh surgical risks.",
        difficulty: "hard",
        tags: ["labor-delivery", "special"]
    },
    {
        id: "baby_096",
        question: "When might healthcare providers recommend artificial rupture of membranes (breaking the water bag) during labor?",
        options: ["Immediately when labor begins", "Only during cesarean delivery", "When labor progress has slowed or stalled", "Never, as it's too dangerous"],
        correct: 2,
        explanation: "Artificial rupture of membranes (AROM) may be performed when labor progress has slowed or stalled, typically after 4-6 cm dilation with adequate contractions but slow cervical change. This procedure can help strengthen contractions and allow direct fetal monitoring if needed. However, AROM is not routinely done and has risks including increased infection risk, cord prolapse (rare), and stronger contractions. The decision involves weighing benefits of potentially speeding labor against risks. Once membranes are ruptured artificially, there's increased time pressure for delivery, and the baby's head position should be well-engaged to minimize complications.",
        difficulty: "medium",
        tags: ["labor-delivery"]
    },
    {
        id: "baby_096",
        question: "When might healthcare providers recommend artificial rupture of membranes (breaking the water bag) during labor?",
        options: ["Immediately when labor begins", "Only during cesarean delivery", "When labor progress has slowed or stalled", "Never, as it's too dangerous"],
        correct: 2,
        explanation: "Artificial rupture of membranes (AROM) may be performed when labor progress has slowed or stalled, typically after 4-6 cm dilation with adequate contractions but slow cervical change. This procedure can help strengthen contractions and allow direct fetal monitoring if needed. However, AROM is not routinely done and has risks including increased infection risk, cord prolapse (rare), and stronger contractions. The decision involves weighing benefits of potentially speeding labor against risks. Once membranes are ruptured artificially, there's increased time pressure for delivery, and the baby's head position should be well-engaged to minimize complications.",
        difficulty: "medium",
        tags: ["labor-delivery"]
    },
    {
        id: "baby_097",
        question: "What does 'crowning' mean during the delivery process?",
        options: ["The moment when cervix reaches full dilation", "When the baby's head becomes visible at the vaginal opening", "The baby's first breath after delivery", "When the umbilical cord is cut"],
        correct: 1,
        explanation: "Crowning occurs when the baby's head becomes visible at the vaginal opening and no longer slips back between contractions. This is an exciting milestone indicating imminent delivery, usually happening during the pushing stage of labor. At crowning, parents can often see and touch their baby's head for the first time. The healthcare provider may ask the mother to stop pushing briefly to allow controlled, gentle delivery of the head to prevent tearing. Once the head is delivered, the body typically follows quickly with the next 1-2 contractions. This moment marks the transition from the second stage of labor (pushing) to the actual birth.",
        difficulty: "easy",
        tags: ["labor-delivery"]
    },
    {
        id: "baby_098",
        question: "What is the expected rate of cervical dilation during active labor for first-time mothers?",
        options: ["0.5 cm per hour", "1.2 cm per hour", "2.5 cm per hour", "4 cm per hour"],
        correct: 1,
        explanation: "During active labor, first-time mothers typically dilate at approximately 1.2 cm per hour, while women who have given birth before often progress at 1.5 cm per hour or faster. Active labor begins around 6 cm dilation and continues until complete dilation at 10 cm. These are guidelines, not rigid rules - normal labor can vary significantly. Slower progress doesn't automatically indicate problems, especially if mother and baby are doing well. Healthcare providers consider multiple factors including contraction strength, baby's position, and maternal comfort when evaluating labor progress. Understanding these norms helps parents have realistic expectations and reduces anxiety about labor duration.",
        difficulty: "medium",
        tags: ["labor-delivery"]
    },
    {
        id: "baby_099",
        question: "What is external cephalic version (ECV) and when is it typically attempted?",
        options: ["A procedure to turn a breech baby to head-down position before delivery", "A type of assisted delivery using forceps or vacuum", "A method of pain relief during labor contractions", "A surgical technique used during cesarean delivery"],
        correct: 0,
        explanation: "External cephalic version (ECV) is a procedure where healthcare providers manually attempt to turn a breech baby (bottom-first) to the normal head-down position by applying pressure to the mother's abdomen. It's typically attempted around 36-37 weeks of pregnancy when the baby is still breech. Success rates are about 50-60% for first pregnancies and higher for subsequent pregnancies. The procedure is performed in a hospital setting with fetal monitoring, and mothers receive medication to relax the uterus. If successful, it allows for vaginal delivery; if unsuccessful, cesarean delivery is usually planned. ECV carries small risks including placental abruption or premature labor.",
        difficulty: "hard",
        tags: ["labor-delivery", "birth-prep"]
    },
    {
        id: "baby_100",
        question: "When might internal fetal monitoring be recommended during labor?",
        options: ["For all laboring women as standard practice", "When external monitoring shows concerning patterns or is difficult to obtain", "Only during cesarean deliveries", "When pain medication is requested"],
        correct: 1,
        explanation: "Internal fetal monitoring involves placing a small electrode directly on the baby's scalp through the cervix to get more accurate heart rate readings. It's used when external monitors show concerning patterns that need clarification, when external monitoring is difficult due to maternal position/movement, or when precise contraction monitoring is needed via intrauterine pressure catheter. Requirements include ruptured membranes and adequate cervical dilation. While it provides more accurate data than external monitoring, it carries small risks of infection or minor scalp injury to baby. The decision balances the need for better monitoring information against these minimal risks when there are concerns about fetal well-being.",
        difficulty: "hard",
        tags: ["labor-delivery", "health"]
    },
    {
        id: "baby_101",
        question: "What does 'failure to progress' or 'labor dystocia' typically mean during labor management?",
        options: ["Complete absence of contractions for more than 2 hours", "Cervix stops dilating or baby doesn't descend despite adequate contractions", "Mother requests to stop pushing due to exhaustion", "Fetal heart rate becomes consistently abnormal"],
        correct: 1,
        explanation: "Failure to progress (labor dystocia) means labor advancement has stalled despite adequate uterine contractions. This can occur during cervical dilation (no change for 2+ hours in active labor with strong contractions) or during pushing (no descent of baby for 2-3 hours with effective pushing). Causes include baby's position, size disproportion, or inadequate contractions. Management may include position changes, walking, pitocin augmentation, or assisted delivery techniques. It's diagnosed based on specific time criteria and contraction adequacy, not just slow progress. Many cases resolve with patience and supportive measures, though sometimes cesarean delivery becomes necessary for maternal or fetal safety.",
        difficulty: "medium",
        tags: ["labor-delivery"]
    },
    {
        id: "baby_102",
        question: "What characterizes precipitous (rapid) labor and what are the main concerns?",
        options: ["Labor lasting less than 3 hours from start to delivery", "Any labor requiring pain medication", "Labor that begins before 37 weeks gestation", "Labor where pushing stage lasts over 3 hours"],
        correct: 0,
        explanation: "Precipitous labor is defined as labor lasting less than 3 hours from onset to delivery, occurring in about 2-3% of births. While it might sound appealing to have a quick labor, it carries risks including increased tearing due to rapid tissue stretching, higher bleeding risk, potential trauma to baby from rapid passage through birth canal, and risk of unattended delivery if arrival at hospital is delayed. Women with history of rapid labor, multiple pregnancies, or certain medical conditions are at higher risk. If experiencing very rapid contractions with strong urges to push, it's crucial to get medical attention immediately and avoid trying to delay delivery, as this can cause more complications.",
        difficulty: "medium",
        tags: ["labor-delivery", "safety"]
    },
    {
        id: "baby_103",
        question: "What is the traditional lithotomy position for delivery and what are its main considerations?",
        options: ["Lying on left side with top leg supported", "Squatting with support from behind", "Lying on back with legs elevated in stirrups", "On hands and knees facing the bed"],
        correct: 2,
        explanation: "The lithotomy position involves lying on the back with legs elevated and supported in stirrups, traditionally used in many hospital deliveries. Advantages include good provider access for monitoring, assistance, and emergency procedures if needed. However, this position can reduce pelvic outlet size by up to 30%, may compress major blood vessels causing decreased blood flow, and works against gravity during pushing. Many providers now encourage various positions during labor and delivery including side-lying, squatting, or semi-upright positions, which can be more comfortable and physiologically beneficial. The best position is often what feels most comfortable and effective for each individual woman during delivery.",
        difficulty: "medium",
        tags: ["labor-delivery"]
    },
    {
        id: "baby_104",
        question: "What is 'bloody show' and what does it typically indicate during late pregnancy?",
        options: ["Heavy bleeding requiring immediate hospital attention", "Pink or brown mucus discharge indicating cervical changes and approaching labor", "Sign of placental abruption or other emergency", "Normal daily discharge throughout pregnancy"],
        correct: 1,
        explanation: "Bloody show is a pink, brown, or slightly blood-tinged mucus discharge that occurs when the cervix begins to soften, thin, and dilate in preparation for labor. It happens when small capillaries in the cervix break as it changes, mixing blood with the mucus plug. This is typically a positive sign that labor may begin within hours to days, though timing varies greatly. It's different from bright red bleeding, which would be concerning. Bloody show is usually minimal in amount and may occur gradually over several days or more noticeably at once. While encouraging, it doesn't mean labor is imminent - some women experience it weeks before delivery begins.",
        difficulty: "easy",
        tags: ["labor-delivery", "birth-prep"]
    },
    {
        id: "baby_105",
        question: "What is counterpressure as a comfort measure during labor?",
        options: ["Breathing technique using counted intervals", "Firm pressure applied to lower back during contractions for pain relief", "Medication given through IV to slow contractions", "Position change technique to help baby rotate"],
        correct: 1,
        explanation: "Counterpressure involves applying firm, steady pressure to the lower back, usually over the sacrum, during contractions to help relieve back labor pain. This technique works by stimulating pressure receptors that can override pain signals (gate control theory) and may help counteract the pressure from baby's head against the mother's spine. It can be applied by partners, doulas, or nurses using hands, fists, tennis balls, or specialized tools. Most effective for women experiencing back labor due to baby's position (often occiput posterior). Counterpressure is safe, non-invasive, and can provide significant relief when applied correctly during the peak of contractions.",
        difficulty: "easy",
        tags: ["labor-delivery"]
    },
    {
        id: "baby_106",
        question: "What does fetal station measure during labor and why is it important?",
        options: ["The baby's heart rate variability during contractions", "How far the baby's head has descended into the pelvis relative to ischial spines", "The strength and frequency of uterine contractions", "The baby's position (head-down vs. breech)"],
        correct: 1,
        explanation: "Fetal station measures how far the baby's presenting part (usually head) has descended into the pelvis, using the mother's ischial spines as reference point (station 0). Negative stations (-3 to -1) mean baby's head is above the spines (higher in pelvis), while positive stations (+1 to +4) indicate descent below the spines toward delivery. Station +4 means crowning is imminent. This measurement helps providers assess labor progress, especially during pushing stage, and determine if vaginal delivery is progressing normally. Combined with cervical dilation, station gives a complete picture of labor advancement and helps guide decisions about interventions or delivery methods.",
        difficulty: "hard",
        tags: ["labor-delivery"]
    },
    {
        id: "baby_107",
        question: "When should you ideally pack your hospital bag for delivery?",
        options: ["As soon as you find out you're pregnant", "Around 32-34 weeks of pregnancy", "When labor begins", "After your due date passes"],
        correct: 1,
        explanation: "Packing your hospital bag around 32-34 weeks is ideal because it ensures you're prepared well before your due date while avoiding months of unnecessary worry about forgetting items. Since about 10% of babies are born before 37 weeks, having your bag ready by 34 weeks provides a safety buffer for preterm labor. This timing also coincides with when most childbirth classes cover hospital preparation topics. Keep the bag easily accessible and inform your partner of its location. Include essentials for labor, postpartum recovery, and baby's first outfit, plus important documents and phone chargers.",
        difficulty: "easy",
        tags: ["birth-prep"]
    },
    {
        id: "baby_108",
        question: "What is a birth plan and when should you create one?",
        options: ["A legally binding contract with your doctor", "A detailed minute-by-minute schedule of your labor", "A communication tool outlining your preferences for labor and delivery", "A medical directive that overrides doctor's recommendations"],
        correct: 2,
        explanation: "A birth plan is a communication tool that outlines your preferences and priorities for labor, delivery, and immediate postpartum care. Create it around 28-32 weeks after researching options and discussing them with your healthcare provider. It should be flexible, as medical situations can change rapidly during labor. Focus on key preferences like pain management, mobility during labor, immediate skin-to-skin contact, and newborn procedures. Remember that your healthcare team's primary goal is safety for you and your baby, so be prepared to adapt if medical circumstances require changes to your preferred plan.",
        difficulty: "medium",
        tags: ["birth-prep"]
    },
    {
        id: "baby_109",
        question: "Which childbirth education class component is most essential for first-time parents?",
        options: ["Breathing techniques only", "Pain medication options only", "Comprehensive preparation covering labor stages, pain management, and postpartum basics", "Breastfeeding instruction only"],
        correct: 2,
        explanation: "Comprehensive childbirth education covering multiple aspects is most valuable for first-time parents because it provides a complete foundation for informed decision-making. Effective classes should cover labor stages and signs, pain management options (both medical and non-medical), basic newborn care, breastfeeding initiation, and partner support techniques. Take classes around 28-32 weeks when you can retain information but aren't too comfortable. Various formats are available including hospital-based, independent instructor-led, or online options. The goal is building confidence and realistic expectations while preparing both parents for their roles during labor and early parenting.",
        difficulty: "medium",
        tags: ["birth-prep"]
    },
    {
        id: "baby_110",
        question: "What should you know about your hospital's visitor policies before delivery?",
        options: ["Visitor policies don't matter during labor", "Only immediate family can visit during labor", "Policies vary by hospital and may change, so check current guidelines", "All visitors are welcome anytime during your stay"],
        correct: 2,
        explanation: "Hospital visitor policies vary significantly and can change based on circumstances like infectious disease outbreaks, hospital capacity, or security concerns. Check your specific hospital's current policies during your third trimester and again closer to delivery. Most hospitals distinguish between labor support persons (usually 1-2 people allowed throughout) and general visitors (often restricted during active labor but allowed postpartum with limitations). Consider who you want present during different phases - active labor, delivery, and recovery - as these may have different rules. Having a plan helps avoid disappointment and family conflicts during an already stressful time.",
        difficulty: "easy",
        tags: ["birth-prep"]
    },
    {
        id: "baby_111",
        question: "When should you head to the hospital during labor?",
        options: ["As soon as contractions begin", "When contractions are 5 minutes apart, lasting 1 minute, for 1 hour (5-1-1 rule)", "Only when your water breaks", "When you feel any discomfort"],
        correct: 1,
        explanation: "The 5-1-1 rule (contractions 5 minutes apart, lasting 1 minute each, for 1 hour) is a general guideline for first-time mothers to head to the hospital. However, follow your provider's specific instructions, as recommendations may vary based on your distance from the hospital, previous birth history, or risk factors. Go immediately if your water breaks (especially if fluid isn't clear), you have constant severe pain, bleeding, or decreased fetal movement. Second-time mothers often labor faster and may need to go with the 4-1-1 pattern. Trust your instincts - if something feels wrong, call your provider or go to the hospital for evaluation.",
        difficulty: "medium",
        tags: ["birth-prep", "labor-delivery"]
    },
    {
        id: "baby_112",
        question: "What is the purpose of a birth doula?",
        options: ["To deliver your baby", "To provide continuous emotional and physical support during labor", "To make medical decisions for you", "To replace your partner during labor"],
        correct: 1,
        explanation: "A birth doula provides continuous emotional, physical, and informational support during labor and delivery without performing medical procedures or making clinical decisions. Research shows doula support can reduce labor length, need for pain medication, and cesarean rates while increasing satisfaction with the birth experience. Doulas complement rather than replace partners, often helping partners feel more confident in their support role. They offer comfort measures like massage, positioning suggestions, breathing reminders, and advocacy for your preferences. If considering a doula, interview candidates during your second trimester to find someone whose approach aligns with your needs and birth preferences.",
        difficulty: "medium",
        tags: ["birth-prep", "labor-delivery"]
    },
    {
        id: "baby_113",
        question: "What should you include in your birth preferences regarding immediate postpartum care?",
        options: ["Only medical procedures", "Skin-to-skin contact, cord clamping timing, and newborn procedures", "Nothing, since doctors decide everything", "Only pain medication preferences"],
        correct: 1,
        explanation: "Include preferences for the crucial first hour after birth: immediate skin-to-skin contact (unless medical complications prevent it), delayed cord clamping (typically 1-3 minutes for healthy full-term babies), timing of newborn procedures like eye ointment and vitamin K injection, and breastfeeding initiation. This 'golden hour' is important for bonding, temperature regulation, and breastfeeding success. You can also specify preferences about who cuts the cord, saving cord blood, and whether you want to see the placenta. Discuss these preferences with your healthcare team beforehand, understanding that medical safety may require modifications to your plan.",
        difficulty: "medium",
        tags: ["birth-prep", "labor-delivery", "newborn"]
    },
    {
        id: "baby_114",
        question: "When should you do a hospital tour?",
        options: ["During your first trimester", "Around 28-32 weeks of pregnancy", "During labor", "After delivery"],
        correct: 1,
        explanation: "Schedule your hospital tour around 28-32 weeks when you're still comfortable traveling but close enough to delivery that the information feels relevant and memorable. Hospital tours help reduce anxiety by familiarizing you with the layout, parking, admission process, labor and delivery rooms, postpartum rooms, and available amenities. Ask about policies for labor support, visiting hours, meal services, lactation support, and newborn procedures. Note locations of important areas like the parking garage, admissions, cafeteria, and gift shop. Many hospitals offer virtual tours online, but in-person visits provide better spatial awareness for the actual day of delivery.",
        difficulty: "easy",
        tags: ["birth-prep"]
    },
    {
        id: "baby_115",
        question: "What financial preparations should you make before baby arrives?",
        options: ["No financial planning is needed", "Only save money for diapers", "Review insurance coverage, save for deductibles, and plan for income changes", "Wait until after delivery to think about costs"],
        correct: 2,
        explanation: "Comprehensive financial preparation should begin in your second trimester. Review your health insurance coverage for maternity and newborn benefits, understand your deductibles and out-of-pocket maximums, and ensure any required pre-authorizations are complete. Plan for potential income changes during parental leave by understanding your employer's policies, state disability benefits, and FMLA provisions. Build an emergency fund for unexpected medical costs or extended leave. Consider life insurance updates and opening a 529 education savings account. Budget for ongoing expenses like childcare, increased healthcare premiums for family coverage, diapers, formula, and baby gear. Early planning reduces financial stress during this major life transition.",
        difficulty: "medium",
        tags: ["birth-prep"]
    },
    {
        id: "baby_116",
        question: "What is 'nesting' and when does it typically occur?",
        options: ["A medical condition requiring treatment", "An instinctive urge to prepare your home for baby, usually in the third trimester", "A sign that labor will begin within 24 hours", "A type of childbirth class"],
        correct: 1,
        explanation: "Nesting is a natural instinctive behavior involving intense urges to clean, organize, and prepare your home for baby's arrival, typically intensifying in the third trimester. This evolutionary behavior helps ensure a safe, prepared environment for the newborn. Common nesting activities include deep cleaning, organizing baby's room, washing baby clothes, stocking supplies, and completing household projects. While nesting energy can be productive, avoid overexertion - delegate heavy tasks, take breaks, and listen to your body. Not all expectant parents experience strong nesting urges, which is completely normal. Partners can support by helping with physical tasks while allowing the pregnant person to direct the preparation efforts.",
        difficulty: "easy",
        tags: ["birth-prep"]
    },
    {
        id: "baby_117",
        question: "What should you know about cord blood banking before delivery?",
        options: ["It's required by law", "You must decide between public donation or private storage before delivery", "It can only be collected after delivery", "It's not beneficial for anyone"],
        correct: 1,
        explanation: "Cord blood banking decisions must be made and arrangements completed before delivery because collection occurs immediately after birth. You can choose public donation (free, helps others, but not reserved for your family), private banking (expensive annual fees, reserved for your family), or no collection. Cord blood contains stem cells that can treat certain blood disorders, cancers, and immune system diseases. The American Academy of Pediatrics supports public donation over private banking for most families since the likelihood of using your own stored cord blood is very low. Research your options early in the third trimester, as some collection companies require advance registration and kit delivery.",
        difficulty: "medium",
        tags: ["birth-prep", "newborn"]
    },
    {
        id: "baby_118",
        question: "When should you install and inspect your infant car seat?",
        options: ["After baby is born", "At least 2-3 weeks before your due date", "When you go into labor", "During your first trimester"],
        correct: 1,
        explanation: "Install your infant car seat at least 2-3 weeks before your due date to allow time for proper installation and professional inspection. Most hospitals require a properly installed car seat before discharge, and about 10% of babies arrive before 37 weeks. Have installation checked by a certified Child Passenger Safety Technician - many fire departments, police stations, and hospitals offer free inspections. Common installation errors include loose base installation, incorrect recline angle, or twisted straps. Practice adjusting harness straps and removing the carrier from the base. Read both your car's manual and car seat instructions thoroughly, as installation methods vary by vehicle type and car seat model.",
        difficulty: "medium",
        tags: ["birth-prep", "safety"]
    },
    {
        id: "baby_119",
        question: "What prenatal records should you bring to the hospital?",
        options: ["No records needed", "Only your insurance card", "Complete prenatal records, insurance information, and identification", "Only your due date"],
        correct: 2,
        explanation: "Bring complete prenatal records including recent lab results, ultrasound reports, Group B Strep status, blood type and Rh factor, medication list, and any pregnancy complications or special instructions from your provider. Also pack insurance cards, photo identification, hospital pre-registration paperwork, and emergency contact information. Many hospitals access electronic medical records, but having physical copies ensures critical information is available if systems are down or you deliver at a different facility than expected. Keep copies in your hospital bag and have your partner know their location. Pre-registering at your hospital during the third trimester can streamline the admission process during labor.",
        difficulty: "easy",
        tags: ["birth-prep"]
    },
    {
        id: "baby_120",
        question: "How many layers of clothing should a newborn wear compared to what an adult would wear?",
        options: ["Same number of layers as an adult", "One more layer than an adult", "Two more layers than an adult", "It depends entirely on room temperature"],
        correct: 1,
        explanation: "Newborns should wear one more layer than what an adult finds comfortable in the same environment. This general rule helps maintain proper body temperature since newborns cannot regulate their temperature as effectively as adults. Their larger surface area to body mass ratio means they lose heat more quickly. However, avoid overheating by checking that baby's chest feels warm but not hot or sweaty. Signs of overheating include flushed skin, rapid breathing, or excessive sweating. In hot weather, this might mean just a diaper and light onesie indoors, while in cold weather it could mean an additional blanket or layer. Always adjust based on baby's cues rather than following the rule rigidly.",
        difficulty: "easy",
        tags: ["newborn", "safety"]
    },
    {
        id: "baby_121",
        question: "What is the normal heart rate range for a healthy newborn at rest?",
        options: ["80-120 beats per minute", "120-160 beats per minute", "160-200 beats per minute", "200-240 beats per minute"],
        correct: 1,
        explanation: "A healthy newborn's resting heart rate ranges from 120-160 beats per minute, which is significantly faster than adult rates (60-100 bpm). This elevated rate is normal because newborns have smaller hearts that must pump more frequently to circulate blood effectively. The heart rate can increase to 180+ bpm when crying, feeding, or active, and may drop to 100-120 bpm during deep sleep. Consistently rates below 100 or above 180 at rest, or any rate changes accompanied by breathing difficulties, poor feeding, or color changes warrant immediate medical evaluation. Parents shouldn't routinely check pulse but should be aware of these ranges if healthcare providers discuss heart rate concerns.",
        difficulty: "medium",
        tags: ["newborn", "health"]
    },
    {
        id: "baby_122",
        question: "Which breathing pattern in a newborn requires immediate medical attention?",
        options: ["Occasional irregular breathing patterns", "Persistent breathing rate over 60 breaths per minute", "Brief pauses (2-3 seconds) between breaths", "Soft snoring sounds during sleep"],
        correct: 1,
        explanation: "A persistent breathing rate over 60 breaths per minute (tachypnea) in a newborn requires immediate medical evaluation as it may indicate respiratory distress, infection, or other serious conditions. Normal newborn breathing rates range from 30-60 breaths per minute and can be naturally irregular with brief pauses up to 10 seconds (periodic breathing). However, consistently rapid breathing, especially when accompanied by grunting, flaring nostrils, chest retractions, or color changes, signals potential problems. Soft snoring from small nasal passages is usually normal. Parents should seek emergency care for breathing rates consistently above 60, pauses longer than 20 seconds, or any breathing difficulty with feeding problems or lethargy.",
        difficulty: "medium",
        tags: ["newborn", "health", "safety"]
    },
    {
        id: "baby_123",
        question: "What is the recommended first-line treatment for a newborn's blocked tear duct?",
        options: ["Apply antibiotic ointment twice daily", "Gently massage from inner corner of eye toward nose", "Use warm compresses for 10 minutes hourly", "Clean with sterile saline solution only"],
        correct: 1,
        explanation: "Gentle massage from the inner corner of the eye toward the nose is the recommended first-line treatment for blocked tear ducts, which affect about 6% of newborns. Using clean hands, apply gentle downward pressure along the tear duct (nasolacrimal duct) 2-3 times daily, especially before feedings when baby is calm. This massage helps open the membrane that may be blocking the duct. Most blocked tear ducts resolve naturally by 12 months. Clean away discharge with sterile water or saline, wiping from inner to outer corner. Consult your pediatrician if there's yellow or green discharge, swelling, or redness around the eye, as these may indicate infection requiring antibiotic treatment.",
        difficulty: "medium",
        tags: ["newborn", "health"]
    },
    {
        id: "baby_124",
        question: "How should parents respond to their newborn's startle reflex (Moro reflex)?",
        options: ["Immediately comfort and restrict arm movements", "Recognize this as normal and provide gentle reassurance", "Try to prevent triggering by avoiding sudden movements", "Consult pediatrician about possible neurological issues"],
        correct: 1,
        explanation: "The Moro reflex (startle reflex) is completely normal and should be recognized as such, with parents providing gentle reassurance when it occurs. This reflex involves the baby suddenly extending their arms and legs, then bringing them back toward their body, often accompanied by crying. It's triggered by sudden movements, loud noises, or feeling like they're falling. The reflex typically disappears by 3-4 months as the nervous system matures. While you can't and shouldn't try to prevent it entirely, swaddling can help minimize the startling effect and help baby feel more secure. Parents should only be concerned if the reflex is absent, asymmetrical (only one side responds), or persists beyond 6 months, which may warrant pediatric evaluation.",
        difficulty: "easy",
        tags: ["newborn", "dev-0-6"]
    },
    {
        id: "baby_125",
        question: "What should parents understand about most newborn birthmarks?",
        options: ["All birthmarks require dermatological evaluation within the first month", "Most birthmarks are harmless and many fade significantly over time", "Birthmarks indicate underlying genetic disorders requiring testing", "Large birthmarks always require surgical removal in infancy"],
        correct: 1,
        explanation: "Most newborn birthmarks are completely harmless and many fade significantly or disappear entirely over time. Common types include salmon patches ('stork bites'), which usually fade by age 2, and mongolian spots, which typically fade by school age. Strawberry hemangiomas may grow initially but usually shrink considerably by age 5-7. However, some birthmarks do warrant medical evaluation: those that are very large, rapidly growing, bleeding, or located in areas that might interfere with vision, breathing, or other functions. Port wine stains and certain large moles may need monitoring or treatment. Parents should discuss any concerns with their pediatrician, who can determine if referral to a dermatologist is needed and provide guidance on which marks require monitoring versus those that are purely cosmetic.",
        difficulty: "easy",
        tags: ["newborn", "health"]
    },
    {
        id: "baby_126",
        question: "What is the safest position for changing a newborn's diaper?",
        options: ["On their side to prevent rolling", "On their back on a secure, flat surface", "Sitting upright with back support", "On their stomach for easier access"],
        correct: 1,
        explanation: "The safest position for diaper changes is on the baby's back on a secure, flat surface with safety straps secured or one hand always on the baby. Use a changing pad with raised edges and safety straps when available, but never rely solely on safety straps. Never leave a baby unattended on an elevated surface, even for seconds. Keep all supplies within arm's reach before starting. For squirmy babies, try giving them a small toy to hold or talking/singing to distract them. If baby becomes too active, it's safer to change them on a blanket on the floor. Always lift baby by holding both ankles together gently rather than pulling on one leg. Clean from front to back, especially for girls, to prevent urinary tract infections.",
        difficulty: "easy",
        tags: ["newborn", "safety"]
    },
    {
        id: "baby_127",
        question: "When is the appropriate time to first trim a newborn's fingernails?",
        options: ["Immediately after birth while nails are soft", "When you notice the baby scratching their face", "Wait until 6 weeks when nails are stronger", "Nails should never be cut, only filed"],
        correct: 1,
        explanation: "Trim a newborn's fingernails when you notice the baby scratching their face, which often happens within the first few days to weeks after birth. Newborn nails grow quickly and can be surprisingly sharp. Use baby nail scissors or clippers designed for infants, and trim when baby is calm or sleeping. Cut straight across, avoiding rounded edges which can lead to ingrown nails. Many parents find it easier to bite or peel very soft newborn nails initially, but proper nail care tools are safer once nails harden slightly. Some hospitals provide mittens to prevent scratching, but these shouldn't be used long-term as babies need their hands for development. If you're nervous about trimming, ask your pediatrician or nurse to demonstrate the technique during a visit.",
        difficulty: "easy",
        tags: ["newborn", "safety"]
    },
    {
        id: "baby_128",
        question: "What should parents expect regarding their newborn's first stools in the hospital?",
        options: ["Bright yellow and loose consistency", "Dark green to black tar-like consistency (meconium)", "Brown and well-formed like adult stools", "Light-colored and mucousy"],
        correct: 1,
        explanation: "Newborns' first stools are meconium - a dark green to black, tar-like, sticky substance that accumulated in the baby's intestines during pregnancy. Meconium is composed of amniotic fluid, skin cells, and other materials the baby ingested in utero. Most babies pass meconium within 24-48 hours after birth, and it should transition to normal newborn stool within 2-3 days. Breastfed babies will develop yellow, seedy, loose stools, while formula-fed babies have tan to brown, more formed stools. Failure to pass meconium within 48 hours may indicate intestinal blockage requiring medical evaluation. White, gray, or clay-colored stools at any time are concerning and may indicate liver problems requiring immediate medical attention.",
        difficulty: "easy",
        tags: ["newborn", "health"]
    },
    {
        id: "baby_129",
        question: "How should you dress a newborn for safe sleep?",
        options: ["In warm pajamas with multiple loose blankets", "In light sleep clothing appropriate for room temperature without loose bedding", "In minimal clothing with room kept very warm", "In heavy sleepwear to ensure warmth throughout the night"],
        correct: 1,
        explanation: "Dress newborns in light sleep clothing appropriate for room temperature (68-70°F) without loose bedding, blankets, bumpers, or pillows in the crib. Use sleep sacks or wearable blankets instead of loose blankets to maintain warmth while following safe sleep guidelines that reduce SIDS risk. A good rule is to dress baby in one more layer than you would wear, then add a sleep sack if needed. Check that baby isn't overheating by feeling their chest or back of neck - they should feel warm but not hot or sweaty. Signs of overheating include flushed skin, damp hair, rapid breathing, or restlessness. The safest sleep environment is a bare crib with only a fitted sheet, with baby dressed appropriately for temperature regulation.",
        difficulty: "medium",
        tags: ["newborn", "safety", "sleep"]
    },
    {
        id: "baby_130",
        question: "What is the most reliable indicator of adequate hydration in a newborn after the first week?",
        options: ["Frequent crying and fussiness", "At least 6 wet diapers per day", "Sleeping 16-20 hours per day", "Having at least 3 bowel movements daily"],
        correct: 1,
        explanation: "At least 6 wet diapers per day after the first week is the most reliable indicator of adequate newborn hydration. In the first few days, expect fewer wet diapers (1 on day 1, 2 on day 2, etc.) as milk supply establishes and baby's kidneys mature. A well-hydrated newborn should have pale yellow urine; dark yellow or strong-smelling urine may indicate dehydration. Other signs of good hydration include moist mouth and lips, regular feeding patterns, and normal skin elasticity. Signs of dehydration requiring immediate medical attention include fewer than 6 wet diapers after day 5, dark urine, dry mouth, sunken fontanelles (soft spots), excessive sleepiness, or irritability. Bowel movement frequency varies widely and isn't a reliable hydration indicator, especially in breastfed babies who may go days between movements.",
        difficulty: "medium",
        tags: ["newborn", "health", "breastfeeding"]
    },
    {
        id: "baby_131",
        question: "How should parents typically respond to newborn hiccups?",
        options: ["Give small sips of warm water to stop them", "Pat the baby's back firmly until hiccups stop", "Usually no intervention is needed as they resolve naturally", "Hold baby in different positions until hiccups cease"],
        correct: 2,
        explanation: "Newborn hiccups are completely normal and usually require no intervention as they resolve naturally within a few minutes to an hour. Hiccups are caused by immature diaphragm spasms and are often triggered by feeding, temperature changes, or excitement. They don't cause discomfort to babies like they do adults. Never give water to newborns, as this can interfere with feeding and potentially cause water intoxication. While some parents try burping, changing positions, or offering a pacifier, these interventions aren't necessary and may not be effective. Hiccups typically decrease in frequency as the nervous system matures over the first few months. Only contact your pediatrician if hiccups are extremely frequent (multiple times daily), last for hours, or interfere with feeding and sleeping patterns.",
        difficulty: "easy",
        tags: ["newborn"]
    },
    {
        id: "baby_132",
        question: "How should parents assess newborn eye discharge?",
        options: ["Any eye discharge indicates a serious infection requiring immediate treatment", "Clear or white discharge is often normal, but yellow or green discharge needs evaluation", "All eye discharge should be treated with over-the-counter antibiotic drops", "Eye discharge is always normal in newborns and requires no attention"],
        correct: 1,
        explanation: "Clear or white eye discharge is often normal in newborns, commonly due to immature tear ducts, but yellow or green discharge warrants pediatric evaluation for possible infection. Normal discharge can be gently cleaned with sterile water or saline using a clean cloth, wiping from inner to outer corner, using a fresh area of cloth for each eye. Blocked tear ducts affect about 6% of newborns and typically resolve by 12 months with gentle massage. However, seek medical attention for yellow/green discharge, excessive tearing, swelling around the eyes, red or irritated eye tissue, or if baby seems uncomfortable. Never use over-the-counter eye drops without pediatric guidance, as newborn eyes are sensitive and some medications can be harmful. Conjunctivitis (pink eye) in newborns can be serious and requires prompt medical treatment.",
        difficulty: "medium",
        tags: ["newborn", "health"]
    },
    {
        id: "baby_133",
        question: "Which skin color change in a newborn requires immediate medical attention?",
        options: ["Temporary purple/blue hands and feet when cold", "Persistent blue coloring of lips, tongue, or central body", "Slight yellow tinge appearing after 24-48 hours", "Pink and blotchy skin pattern when crying"],
        correct: 1,
        explanation: "Persistent blue coloring of lips, tongue, or central body (central cyanosis) requires immediate emergency medical attention as it indicates inadequate oxygen circulation. This is different from acrocyanosis - the normal blue/purple coloring of hands and feet that occurs when newborns are cold and improves with warming. Normal newborn color variations include temporary mottling when cold, pink and blotchy patterns when crying or active, and mild jaundice (yellowing) appearing after 24-48 hours in many babies. However, jaundice appearing in the first 24 hours, severe yellowing, or yellowing of palms and soles also requires urgent evaluation. Other concerning color changes include persistent pallor, gray coloring, or any blue coloring that doesn't improve with warming. When in doubt about color changes, especially around the lips and tongue, seek immediate medical evaluation.",
        difficulty: "medium",
        tags: ["newborn", "health", "safety"]
    },
    {
        id: "baby_134",
        question: "What should parents expect regarding their newborn's head shape immediately after birth?",
        options: ["The head should be perfectly round and symmetrical", "The head may be temporarily misshapen due to passage through the birth canal", "Any irregularity in head shape indicates birth trauma requiring treatment", "Head shape is permanent and will not change after delivery"],
        correct: 1,
        explanation: "Newborn head shape may be temporarily misshapen immediately after birth due to molding during passage through the birth canal, and this is completely normal. The skull bones are designed to overlap slightly during delivery to fit through the pelvis, causing temporary elongation, asymmetry, or cone-shaped appearance. This molding typically resolves within a few days to weeks as the skull bones return to normal position. Babies born via cesarean section usually have rounder heads since they didn't experience birth canal pressures. Parents should be concerned about head shape only if there's severe asymmetry that persists beyond a few weeks, which might indicate positional plagiocephaly (flat head syndrome) requiring evaluation. Very rarely, premature fusion of skull bones (craniosynostosis) can occur, but this is usually diagnosed through routine pediatric exams, not immediately after birth.",
        difficulty: "easy",
        tags: ["newborn"]
    },
    {
        id: "baby_135",
        question: "When should parents take a rectal temperature in a newborn?",
        options: ["Only when specifically instructed by healthcare provider", "As part of daily routine monitoring", "Whenever the baby feels warm to touch", "Only during the first week after birth"],
        correct: 0,
        explanation: "Rectal temperatures should only be taken when specifically instructed by a healthcare provider, as this method carries risks including rectal perforation if done incorrectly. For routine monitoring, parents should use safer alternatives like axillary (armpit) or temporal artery thermometers, which are adequate for detecting fever in newborns. Any fever over 100.4°F (38°C) in babies under 3 months requires immediate medical attention regardless of measurement method. Healthcare providers may request rectal temperatures for accuracy when precise readings are medically necessary, but parents should never attempt this without proper instruction and medical indication.",
        difficulty: "medium",
        tags: ["newborn", "health"]
    },
    {
        id: "baby_136",
        question: "What is the typical daily crying duration for a healthy newborn in the first few weeks?",
        options: ["30 minutes to 1 hour", "1-3 hours total throughout the day", "4-6 hours continuously", "More than 6 hours indicates colic"],
        correct: 1,
        explanation: "Healthy newborns typically cry 1-3 hours total throughout the day, with crying often clustered in the evening hours (witching hour). Crying usually peaks around 6 weeks of age before gradually decreasing. This is completely normal as crying is a baby's primary form of communication for hunger, discomfort, overstimulation, or need for comfort. Colic is defined as crying more than 3 hours per day, more than 3 days per week, for more than 3 weeks in an otherwise healthy baby. Parents should contact their pediatrician if crying seems excessive, is accompanied by fever, or if the baby cannot be consoled despite meeting all basic needs.",
        difficulty: "easy",
        tags: ["newborn"]
    },
    {
        id: "baby_137",
        question: "What is the primary evidence-based benefit of rooming-in with your newborn at the hospital?",
        options: ["Reduces hospital costs and length of stay", "Promotes breastfeeding success and maternal-infant bonding", "Allows better rest for the mother", "Prevents newborn infections"],
        correct: 1,
        explanation: "Rooming-in significantly promotes breastfeeding success and maternal-infant bonding by allowing mothers to learn their baby's hunger cues, practice feeding more frequently, and increase skin-to-skin contact. Research shows rooming-in increases breastfeeding duration and exclusivity rates. It also helps establish circadian rhythms and temperature regulation through close contact. While babies can room-in safely, parents always have the option to send baby to the nursery when they need rest, especially after difficult deliveries. The practice supports early attachment, helps mothers gain confidence in newborn care, and facilitates immediate response to infant needs during the critical early bonding period.",
        difficulty: "medium",
        tags: ["newborn", "breastfeeding"]
    },
    {
        id: "baby_138",
        question: "When should vitamin D supplementation begin for exclusively breastfed newborns?",
        options: ["Within the first few days after birth", "At 2 weeks of age", "Only after 1 month of age", "Not until solid foods begin"],
        correct: 0,
        explanation: "The American Academy of Pediatrics recommends vitamin D supplementation (400 IU daily) begin within the first few days after birth for all breastfed babies, as breast milk contains insufficient vitamin D to prevent deficiency. This prevents rickets and supports proper bone development. Formula-fed babies typically don't need supplementation since formula is fortified with vitamin D. The supplement should be continued until the baby is weaned to vitamin D-fortified formula or milk and consuming 1 liter daily. Liquid vitamin D drops designed for infants are the safest form. Your pediatrician will prescribe the appropriate supplement and provide specific instructions for administration during early well-child visits.",
        difficulty: "medium",
        tags: ["newborn", "health", "breastfeeding"]
    },
    {
        id: "baby_139",
        question: "What is the expected weekly weight gain for a healthy newborn after regaining birth weight?",
        options: ["2-4 ounces per week", "4-7 ounces per week", "8-10 ounces per week", "1 pound per week"],
        correct: 1,
        explanation: "Healthy newborns typically gain 4-7 ounces (0.5-1 ounce daily) per week after regaining their birth weight, usually by 10-14 days of age. This rate generally continues for the first 3-4 months before gradually slowing. Weight gain patterns can vary significantly between babies while still being normal - some may gain steadily while others have growth spurts followed by slower periods. Concerning signs include consistently gaining less than 4 ounces weekly, losing weight after the initial newborn period, or crossing multiple percentile lines downward on growth charts. Regular pediatric visits track growth trends over time rather than focusing on single measurements, as overall growth patterns are more important than daily fluctuations.",
        difficulty: "medium",
        tags: ["newborn", "health"]
    },
    {
        id: "baby_140",
        question: "What is the most critical safety consideration for newborn car seat positioning?",
        options: ["The harness straps should allow two fingers underneath", "The chest clip should be positioned at armpit level", "The car seat should recline at 30-45 degrees to prevent airway compromise", "The infant should face forward to monitor breathing"],
        correct: 2,
        explanation: "The car seat must recline at the proper angle (30-45 degrees) to prevent the newborn's head from falling forward and compromising their airway, as newborns have proportionally large heads and weak neck muscles. The seat should be rear-facing until at least age 2. The harness should fit snugly (only one finger should fit under straps), chest clip at armpit level, and straps should come from at or below shoulder level. Many car seats have angle indicators or adjusters to achieve proper recline. Premature babies may need special positioning devices or medical clearance before car travel. Never add aftermarket products not approved by the car seat manufacturer, and ensure professional installation or inspection when possible.",
        difficulty: "easy",
        tags: ["newborn", "safety"]
    },
    {
        id: "baby_141",
        question: "What is the typical feeding frequency for a healthy newborn in the first month?",
        options: ["Every 4-6 hours on a strict schedule", "Every 2-4 hours, or 8-12 times per day", "Every 1-2 hours around the clock", "Only when the baby cries for food"],
        correct: 1,
        explanation: "Newborns typically need to feed every 2-4 hours, resulting in 8-12 feedings per 24-hour period. Breastfed babies may feed more frequently (every 1.5-3 hours) due to faster digestion, while formula-fed babies may go slightly longer between feeds. Feeding should be responsive to infant cues rather than rigid scheduling - look for early hunger signs like rooting, hand-to-mouth movements, and lip smacking rather than waiting for crying. Cluster feeding (frequent feeds close together) is normal, especially in evenings. Never let a newborn go more than 4-5 hours without feeding, and wake sleepy babies if necessary to maintain adequate nutrition and growth during this critical period.",
        difficulty: "easy",
        tags: ["newborn", "breastfeeding", "bottle-feeding"]
    },
    {
        id: "baby_142",
        question: "Which common newborn skin condition most often causes unnecessary parental concern due to its alarming appearance?",
        options: ["Milia (tiny white bumps)", "Erythema toxicum (red blotchy rash with white centers)", "Mongolian spots (blue-gray birthmarks)", "Cradle cap (scaly scalp patches)"],
        correct: 1,
        explanation: "Erythema toxicum appears as red, blotchy areas with small white or yellow centers that can look alarming to parents, resembling infections or serious skin conditions. However, it's completely harmless and affects up to 70% of full-term newborns, typically appearing 1-3 days after birth and resolving within a week without treatment. The rash moves around the body and doesn't appear on palms or soles. Unlike true infections, babies with erythema toxicum are otherwise well with normal temperature and behavior. Parents should seek medical attention for any rash accompanied by fever, lethargy, poor feeding, or pustules that appear infected, but erythema toxicum requires only reassurance and observation.",
        difficulty: "medium",
        tags: ["newborn", "health"]
    },
    {
        id: "baby_143",
        question: "What constitutes the safest sleep environment for a newborn according to current AAP guidelines?",
        options: ["Soft mattress with breathable bumpers for comfort", "Firm mattress with fitted sheet only, nothing else in crib", "Waterproof mattress with light blankets tucked in", "Slightly inclined surface to prevent reflux"],
        correct: 1,
        explanation: "The safest sleep environment is a firm mattress with only a fitted sheet - no blankets, pillows, bumpers, toys, or other items in the crib. This follows American Academy of Pediatrics safe sleep guidelines to reduce SIDS risk. The crib should meet current safety standards with slats no more than 2⅜ inches apart. Inclined sleepers and rock 'n play products have been recalled due to suffocation deaths. For warmth, use sleep sacks or wearable blankets rather than loose bedding. Room-sharing (baby's sleep surface in parents' room) is recommended for at least the first 6 months, but bed-sharing increases suffocation risk and is not recommended.",
        difficulty: "easy",
        tags: ["newborn", "sleep", "safety"]
    },
    {
        id: "baby_144",
        question: "What is the current evidence-based recommendation for umbilical cord stump care?",
        options: ["Clean with rubbing alcohol 3-4 times daily", "Wash gently with soap and water, keep clean and dry", "Keep completely dry and avoid all cleaning", "Apply antibiotic ointment to prevent infection"],
        correct: 1,
        explanation: "Current recommendations emphasize gentle cleaning with soap and water during regular bathing, followed by keeping the area clean and dry. This approach, called 'dry cord care,' has replaced older practices of routine alcohol application, which research showed didn't prevent infection and may actually delay healing. Fold diapers below the cord to prevent urine contact, and give sponge baths until the cord falls off and heals completely. The stump naturally changes color from blue-white to brown/black as it dries. Contact your pediatrician for signs of infection: redness extending around the base, foul odor, pus, or persistent bleeding beyond a few drops when the cord detaches.",
        difficulty: "medium",
        tags: ["newborn", "health"]
    },
    {
        id: "baby_145",
        question: "When should parents first introduce a pacifier to a breastfed newborn?",
        options: ["Immediately after birth to prevent crying", "After 3-4 weeks when breastfeeding is well-established", "Only during sleep times from birth", "After 6 months when solid foods begin"],
        correct: 1,
        explanation: "The AAP recommends introducing pacifiers after breastfeeding is well-established, typically 3-4 weeks postpartum. This timing prevents nipple confusion and ensures adequate milk supply establishment. 'Established breastfeeding' means baby is gaining weight appropriately, nursing efficiently, and mother's milk supply is stable. Pacifiers can then be offered at sleep times to reduce SIDS risk. Choose orthodontic pacifiers, replace regularly for hygiene, and don't force acceptance. Pacifier dependency concerns are largely unfounded - most children naturally wean by age 2-4. For formula-fed babies, pacifiers can be introduced immediately after birth.",
        difficulty: "medium",
        tags: ["newborn", "breastfeeding", "safety"]
    },
    {
        id: "baby_146",
        question: "What should parents expect regarding their newborn's urination pattern in the first 24-48 hours?",
        options: ["At least 6-8 wet diapers immediately", "First void within 24 hours, then increasing frequency", "No wet diapers for 48 hours is normal", "Only 1-2 wet diapers total in first two days"],
        correct: 1,
        explanation: "Newborns should have their first urination within 24 hours of birth, indicating normal kidney function. Initially, babies may only wet 1-2 diapers per day, but this increases as feeding establishes and fluid intake improves. By day 3-5, expect at least 6 wet diapers per 24 hours. Very concentrated (dark yellow) or absent urine after 24 hours requires medical evaluation. In the first days, urine may appear orange or pink due to concentrated urates, which is normal. Parents should track diaper output as an important indicator of adequate feeding and hydration, especially during the critical first week when weight loss and regain are monitored.",
        difficulty: "easy",
        tags: ["newborn", "health"]
    },
    {
        id: "baby_147",
        question: "How should parents assess and respond to newborn grunting and noisy breathing?",
        options: ["Always indicates respiratory distress requiring immediate medical care", "Usually normal if baby is eating, sleeping, and alert when awake", "Requires medication to clear airways", "Means baby needs to be held upright at all times"],
        correct: 1,
        explanation: "Newborn grunting and noisy breathing are usually normal due to narrow nasal passages, immature respiratory muscles, and learning to coordinate breathing with other activities. This is particularly common during sleep and feeding. Normal grunting occurs when babies are comfortable, feeding well, and alert during wake periods. However, seek immediate medical attention for: persistent grunting with every breath while awake, blue coloring around lips or face, retractions (chest pulling in with breathing), flaring nostrils, or rapid breathing over 60 breaths per minute at rest. Gentle saline drops can help with congestion, but avoid suctioning unless truly necessary as it can cause irritation.",
        difficulty: "medium",
        tags: ["newborn", "health"]
    },
    {
        id: "baby_148",
        question: "When should parents discontinue swaddling their newborn?",
        options: ["After exactly 8 weeks regardless of development", "When baby shows any signs of attempting to roll over", "Only when baby consistently breaks free from swaddle", "When baby reaches 15 pounds in weight"],
        correct: 1,
        explanation: "Swaddling must be discontinued as soon as baby shows any signs of attempting to roll over, typically around 2-4 months, but this varies by individual development. Rolling while swaddled creates a suffocation risk if baby can't lift their head when face-down. Signs include increased leg movement, pushing up during tummy time, or turning to side during sleep. Transition gradually using one arm out, then both arms free, or try transitional sleep products. Proper swaddling involves arms snug but hips loose to prevent hip dysplasia, using breathable fabric, and ensuring baby doesn't overheat. Safe swaddling can improve newborn sleep by preventing startle reflex wake-ups, but safety always takes precedence over sleep convenience.",
        difficulty: "medium",
        tags: ["newborn", "sleep", "safety"]
    },
    {
        id: "baby_149",
        question: "What should parents understand about lanugo on their newborn?",
        options: ["It indicates the baby was born prematurely and needs special care", "It's normal protective hair that will naturally shed within weeks to months", "It's a skin condition requiring medicated lotions for removal", "It only appears on babies with genetic hair growth disorders"],
        correct: 1,
        explanation: "Lanugo is fine, soft hair that covers babies in utero starting around 20 weeks gestation, providing protection and temperature regulation. Most term babies have minimal lanugo at birth, primarily on shoulders, back, and forehead, which naturally sheds within the first few weeks to months. Premature babies typically have more extensive lanugo coverage. This hair requires no special care - never attempt to scrub or forcibly remove it, as this can irritate delicate newborn skin. Simply gentle bathing and natural shedding will resolve it. More prominent lanugo in term babies is completely normal and doesn't indicate any underlying condition. Focus on gentle skincare and allow natural development to proceed.",
        difficulty: "easy",
        tags: ["newborn"]
    },
    {
        id: "baby_150",
        question: "How can parents distinguish normal newborn jitteriness from concerning tremors?",
        options: ["All newborn shaking movements indicate serious neurological problems", "Normal jitteriness stops when baby is gently touched or repositioned", "Jitteriness only occurs when babies are hungry and indicates low blood sugar", "Tremors that occur during sleep are always abnormal and require immediate care"],
        correct: 1,
        explanation: "Normal newborn jitteriness is common due to an immature nervous system and typically stops when baby is gently touched, held, or repositioned. It often occurs with crying, during state changes, or when startled. True seizures cannot be stopped by touch and may include rhythmic jerking, eye deviation, or altered consciousness. Jitteriness can also result from caffeine exposure through breastfeeding, overstimulation, or being cold. Concerning signs requiring immediate evaluation include: tremors that don't stop with touch, occur with fever, involve only one side of the body, or are accompanied by poor feeding, lethargy, or color changes. Most newborn jitteriness resolves as the nervous system matures over the first few weeks to months.",
        difficulty: "medium",
        tags: ["newborn", "health"]
    },
    {
        id: "baby_151",
        question: "What is the current recommendation for sun exposure in babies under 6 months?",
        options: ["15-20 minutes of direct sunlight daily for natural vitamin D production", "Avoid direct sun exposure; use shade, protective clothing, and minimal sunscreen if needed", "Only filtered sunlight through windows is safe for vitamin D", "Brief sun exposure is fine as long as baby doesn't get sunburned"],
        correct: 1,
        explanation: "The AAP recommends avoiding direct sun exposure for babies under 6 months due to extremely sensitive skin and high sunburn risk. Instead, use shade, protective clothing (long sleeves, pants, wide-brimmed hats), and stroller canopies. If sun exposure is unavoidable, minimal amounts of SPF 30+ sunscreen can be applied to small areas like face and hands after 6 months, though some pediatricians approve earlier use for exposed areas. Vitamin D needs should be met through supplements (400 IU daily) for breastfed babies rather than sun exposure. Even brief exposure can cause serious burns in newborns. After 6 months, gradual, protected sun exposure with proper sunscreen becomes safer as skin matures.",
        difficulty: "medium",
        tags: ["newborn", "safety", "health"]
    },
    {
        id: "baby_152",
        question: "When do newborn eyes typically reach their permanent color?",
        options: ["Eye color is permanent at birth and doesn't change", "Final color is established by 6 weeks after birth", "Most significant changes occur between 6 months to 3 years of age", "Eye color continues changing throughout childhood and adolescence"],
        correct: 2,
        explanation: "Most babies are born with blue or gray eyes due to limited melanin production in the iris. Significant color changes typically occur between 6 months to 3 years as melanin production increases with light exposure and genetic expression. Dark-eyed parents usually have babies whose eyes darken within the first year, while light-eyed parents may see more gradual changes. Brown eyes tend to appear earlier and stabilize sooner than green or hazel eyes. Some subtle changes can continue until age 3. Family genetics strongly influence final color, but grandparents' eye colors can sometimes 'skip' generations. Dramatic color changes after age 3 are rare and should be evaluated by a pediatric ophthalmologist, as this could indicate underlying conditions.",
        difficulty: "easy",
        tags: ["newborn", "dev-0-6"]
    },
    {
        id: "baby_153",
        question: "What is the safest and most effective approach to managing newborn nasal congestion?",
        options: ["Over-the-counter infant decongestant drops as needed", "Saline nose drops followed by gentle bulb syringe suction", "Antihistamine medications to reduce allergic reactions", "Humidifier use only without any direct nasal intervention"],
        correct: 1,
        explanation: "Saline nose drops (2-3 drops per nostril) followed by gentle bulb syringe suction is the safest method for newborn congestion. Apply saline, wait 30-60 seconds, then gently suction with baby's head slightly elevated. Never use medications - decongestants and antihistamines are dangerous for infants under 2 years. Limit suctioning to 2-3 times daily to avoid nasal irritation. Use a cool-mist humidifier to maintain 40-50% humidity, ensure proper hydration, and avoid smoke exposure. Normal newborn stuffiness occurs due to narrow nasal passages and is often worse at night. Seek medical care if congestion interferes with feeding, breathing appears labored, fever develops, or symptoms persist beyond 10-14 days.",
        difficulty: "medium",
        tags: ["newborn", "health"]
    },
    {
        id: "baby_154",
        question: "What should parents understand about their newborn's fontanelles (soft spots)?",
        options: ["Fontanelles should feel completely solid and never move or pulsate", "Gentle pulsing and slight depression when upright are normal findings", "Any visible or palpable soft spot indicates a serious developmental problem", "Fontanelles require protective padding and should never be touched during care"],
        correct: 1,
        explanation: "Fontanelles are normal soft spots where skull bones haven't yet fused, allowing for brain growth and easier delivery. The anterior (top front) fontanelle is diamond-shaped and closes between 12-18 months, while the smaller posterior (back) fontanelle closes by 2-4 months. Normal fontanelles feel soft, show gentle pulsing with heartbeat, and appear slightly depressed when baby is upright and calm. It's safe to gently touch and wash over fontanelles during normal care. Seek immediate medical attention for: bulging fontanelles (especially when baby is upright and calm), severely sunken appearance, or unusual tenseness. These could indicate increased pressure, dehydration, or infection. Gentle care is sufficient - no special protection needed.",
        difficulty: "medium",
        tags: ["newborn", "health"]
    },
    {
        id: "baby_155",
        question: "When should parents be concerned about newborn eye discharge?",
        options: ["Any discharge in the first 48 hours", "Yellow or green thick discharge with redness", "Clear watery discharge from one eye", "Crusty discharge only upon waking"],
        correct: 1,
        explanation: "Yellow or green thick discharge accompanied by redness around the eye indicates possible bacterial infection requiring prompt medical evaluation. Normal newborn eye discharge is typically clear and watery, often caused by immature tear ducts or leftover amniotic fluid. About 20% of newborns have blocked tear ducts causing clear discharge that usually resolves by 12 months. Gentle cleaning with warm water from inner to outer corner is appropriate for normal discharge. However, thick colored discharge, significant redness, swelling, or discharge that increases rather than decreases after the first few days warrants pediatric evaluation to rule out conjunctivitis or other infections.",
        difficulty: "medium",
        tags: ["newborn", "health"]
    },
    {
        id: "baby_156",
        question: "How many wet diapers should a healthy newborn have after the first week of life?",
        options: ["2-3 wet diapers per day", "4-5 wet diapers per day", "6-8 wet diapers per day", "10-12 wet diapers per day"],
        correct: 2,
        explanation: "After the first week, healthy newborns should have at least 6-8 wet diapers per 24-hour period, indicating adequate hydration and milk intake. In the first few days, expect fewer wet diapers (1 on day 1, 2 on day 2, etc.) as feeding establishes. The urine should be pale yellow or colorless - dark yellow or orange may indicate dehydration. Wet diaper count is a key indicator that breastfeeding or formula feeding is going well. Super-absorbent diapers can make wetness hard to detect, so feel the weight of the diaper or place a tissue inside to check. Consistently fewer than 6 wet diapers after day 5-7 warrants pediatric evaluation for feeding adequacy and hydration status.",
        difficulty: "easy",
        tags: ["newborn", "health"]
    },
    {
        id: "baby_157",
        question: "When is it safe to use sunscreen on a baby's skin?",
        options: ["Immediately after birth for any sun exposure", "After 2 months for extended outdoor time", "After 6 months, with small amounts on exposed areas under 6 months if needed", "Only after 1 year of age"],
        correct: 2,
        explanation: "The American Academy of Pediatrics recommends avoiding sunscreen until 6 months of age when possible, prioritizing shade and protective clothing instead. However, small amounts of sunscreen (SPF 30+) may be applied to exposed areas like face and hands if adequate shade and clothing aren't available for babies under 6 months. Infant skin is thinner and more sensitive, with higher absorption rates of chemicals. For babies under 6 months, primary sun protection should include avoiding peak sun hours (10am-4pm), using strollers with UV-protective canopies, lightweight long-sleeved clothing, and wide-brimmed hats. After 6 months, broad-spectrum sunscreen becomes the standard recommendation for exposed skin areas.",
        difficulty: "medium",
        tags: ["newborn", "safety", "health"]
    },
    {
        id: "baby_158",
        question: "What should parents understand about blue coloring in their newborn's hands and feet during the first days?",
        options: ["This always indicates a serious heart or lung problem", "This is normal initially due to immature circulation", "This requires immediate warming and medical attention", "This only happens in babies born prematurely"],
        correct: 1,
        explanation: "Blue coloring in newborn hands and feet (acrocyanosis) is normal during the first 24-48 hours due to immature circulation and the transition from fetal to newborn blood flow patterns. The baby's circulatory system is still adapting to breathing air instead of receiving oxygen through the umbilical cord. This bluish tint should resolve as circulation improves and is different from central cyanosis (blue lips, tongue, or trunk) which requires immediate medical attention. Normal peripheral blueness may reappear when babies are cold or crying. Parents should be concerned if the blue color involves the lips, tongue, face, or persists beyond the first few days, or if it worsens rather than improves with time and warming.",
        difficulty: "medium",
        tags: ["newborn", "health"]
    },
    {
        id: "baby_159",
        question: "How should parents respond to cluster feeding in their newborn?",
        options: ["Limit feeding sessions to every 3 hours to establish routine", "Allow frequent feeding sessions, especially during evening hours", "Supplement with formula to ensure adequate nutrition", "Only permit cluster feeding during daytime hours"],
        correct: 1,
        explanation: "Cluster feeding - when babies feed frequently in short intervals, often in the evening - is completely normal newborn behavior that should be allowed and supported. This pattern typically occurs during growth spurts, developmental leaps, or when establishing milk supply, especially common at 2-3 weeks, 6 weeks, and 3 months. Evening cluster feeding often precedes longer sleep stretches overnight. Rather than fighting this natural pattern, parents should prepare by staying hydrated, having snacks nearby, and asking for support with other tasks. Cluster feeding doesn't indicate insufficient milk supply - it actually helps establish and increase milk production. Supplementing with formula during cluster feeding can interfere with natural supply and demand. Trust your baby's cues and your body's ability to respond appropriately.",
        difficulty: "medium",
        tags: ["newborn", "breastfeeding"]
    },
    {
        id: "baby_160",
        question: "What is the recommended timing for a newborn's first bath?",
        options: ["Within the first 2 hours after birth", "After 6-12 hours when temperature is stable", "After 24 hours when feeding is established", "After the umbilical cord falls off"],
        correct: 1,
        explanation: "The first bath should be delayed until 6-12 hours after birth when the baby's temperature has stabilized and they've had successful initial feeding. Immediate bathing can cause hypothermia as newborns have difficulty regulating body temperature. The vernix caseosa (white waxy coating) provides natural protection and moisture, so there's no rush to remove it. WHO and AAP recommend delaying the first bath at least 6 hours, with many hospitals now waiting 12-24 hours. Prior to the first bath, only spot-cleaning of diaper area and face as needed is recommended. When bathing does occur, use warm water (98-100°F), work quickly, and ensure the room is warm. Sponge baths are recommended until the umbilical cord heals completely.",
        difficulty: "easy",
        tags: ["newborn", "health"]
    },
    {
        id: "baby_161",
        question: "When should the Moro (startle) reflex typically begin to disappear in healthy newborns?",
        options: ["By 2 weeks of age", "By 2-3 months of age", "By 4-6 months of age", "By 12 months of age"],
        correct: 2,
        explanation: "The Moro or startle reflex typically begins to disappear around 2-3 months and should be completely gone by 4-6 months of age. This reflex causes babies to throw their arms out, arch their backs, and then draw arms back in when startled by loud noises or sudden movements. It's a normal primitive reflex present from birth that indicates healthy nervous system development. The reflex may initially startle parents, but it's completely normal and actually protective. Persistence beyond 6 months or absence from birth may indicate neurological concerns requiring evaluation. Other primitive reflexes like rooting, sucking, and grasp follow similar timelines, gradually being replaced by voluntary motor control. Understanding normal reflex patterns helps parents recognize healthy development and know when to seek evaluation.",
        difficulty: "medium",
        tags: ["newborn", "dev-0-6"]
    },
    {
        id: "baby_162",
        question: "How frequently should parents check and change a newborn's diaper?",
        options: ["Every hour around the clock", "Every 2-3 hours or immediately when soiled", "Only when visibly wet or soiled", "Every 4-6 hours to avoid over-handling"],
        correct: 1,
        explanation: "Newborn diapers should be checked every 2-3 hours and changed immediately when wet or soiled to prevent diaper rash and maintain hygiene. Newborns urinate frequently and have sensitive skin that can develop rash quickly from prolonged contact with moisture or stool. Super-absorbent diapers can mask wetness, so regular checking is essential. Always change immediately after bowel movements to prevent skin irritation and bacterial growth. During night feeding, change before feeding if heavily soiled, or after feeding if just wet to avoid disrupting sleep. Frequent changes also help parents monitor adequate intake through wet diaper count. Some newborns soil diapers during or immediately after feeding due to the gastrocolic reflex, requiring additional changes. Proper sizing and fit help prevent leaks requiring extra changes.",
        difficulty: "easy",
        tags: ["newborn", "health"]
    },
    {
        id: "baby_163",
        question: "When do the first newborn growth spurts typically occur?",
        options: ["Around 7-10 days and 2-3 weeks", "Only after 2 months of age", "Randomly with no predictable pattern", "Around 6 weeks and 3 months only"],
        correct: 0,
        explanation: "The first growth spurts typically occur around 7-10 days and 2-3 weeks, followed by additional spurts around 6 weeks, 3 months, and 6 months. During growth spurts, babies may feed more frequently, seem hungrier than usual, be more fussy or clingy, and sleep more or have disrupted sleep patterns. These periods usually last 2-7 days and are completely normal developmental phases. For breastfeeding mothers, increased feeding frequency helps boost milk supply to meet growing demands - resist the urge to supplement unless medically indicated. Growth spurts can be exhausting for parents but represent healthy development. Babies may also have increased crying, want more comfort, and seem generally unsettled. Trust that this temporary phase will pass and continue responding to baby's cues for feeding and comfort.",
        difficulty: "medium",
        tags: ["newborn", "dev-0-6", "breastfeeding"]
    },
    {
        id: "baby_164",
        question: "What is the normal stool frequency for a healthy breastfed newborn after the first week?",
        options: ["Once every 3-7 days", "Once daily", "3-8 times per day", "Only after each feeding"],
        correct: 2,
        explanation: "Breastfed newborns typically have 3-8 stools per day after the first week, though patterns vary widely and can still be normal. Some breastfed babies may go several days without stooling after the first month due to breast milk's high digestibility and low waste production. Formula-fed babies typically have 1-4 stools daily with more consistent patterns. Stool progression goes from black meconium (first 2-3 days) to transitional green-brown stools, then yellow, seedy stools for breastfed babies. Consistency matters more than frequency - stools should be soft and easy to pass. Concerning signs include hard, pellet-like stools, blood, or sudden changes in established patterns. By 6 weeks, some breastfed babies may go up to 10 days between stools and still be normal if gaining weight well and stools remain soft.",
        difficulty: "medium",
        tags: ["newborn", "health", "breastfeeding"]
    },
        {
        id: "baby_165",
        question: "When should parents be concerned about newborn spit-up?",
        options: ["Any spit-up occurring more than once per feeding", "Projectile vomiting or bile-colored/bloody vomit", "Spit-up that occurs within 30 minutes of feeding", "Any spit-up that has a sour smell"],
        correct: 1,
        explanation: "Most newborn spit-up is normal and harmless reflux, but parents should seek immediate medical attention for projectile vomiting (forceful vomiting traveling several feet) which may indicate pyloric stenosis, or bile-colored (green/yellow) and bloody vomit which can signal serious digestive issues. Normal spit-up is typically small amounts that dribble out gently, while concerning vomiting is more forceful and larger volumes. Also concerning are signs of dehydration like decreased wet diapers, lethargy, poor feeding, or failure to gain weight. Most healthy babies spit up frequently, especially after feeding, and this usually resolves as their digestive system matures.",
        difficulty: "medium",
        tags: ["newborn", "health"]
    },
    {
        id: "baby_166",
        question: "What is the normal rectal temperature range for a healthy newborn?",
        options: ["96.0-97.5°F (35.6-36.4°C)", "97.7-99.5°F (36.5-37.5°C)", "100.0-101.5°F (37.8-38.6°C)", "101.5-102.5°F (38.6-39.2°C)"],
        correct: 1,
        explanation: "Normal newborn rectal temperature ranges from 97.7-99.5°F (36.5-37.5°C). Rectal temperature is the most accurate method for newborns under 3 months. Any temperature below 97.7°F or above 100.4°F (38°C) requires immediate medical attention in newborns, as their immune systems are immature and fever can indicate serious infection. Temperature regulation is still developing in newborns, making them more susceptible to both overheating and hypothermia. Axillary (armpit) temperatures are less accurate but can be used for screening, typically running about 1°F lower than rectal temperatures. Always use a digital thermometer designed for infants and follow proper technique for accurate readings.",
        difficulty: "easy",
        tags: ["newborn", "health"]
    },
    {
        id: "baby_167",
        question: "What is the recommended approach for managing newborn cradle cap (seborrheic dermatitis)?",
        options: ["Scrub firmly with medicated shampoo daily", "Apply baby oil, gently brush, then wash with mild shampoo", "Avoid touching the area completely until it resolves", "Use prescription antifungal medication immediately"],
        correct: 1,
        explanation: "Cradle cap (seborrheic dermatitis) is best managed by applying baby oil, mineral oil, or petroleum jelly to soften the scales, then gently brushing with a soft-bristled brush or washcloth before washing with mild baby shampoo. This harmless condition affects up to 50% of newborns and usually resolves within a few months without treatment. Avoid vigorous scrubbing, which can irritate the scalp and worsen the condition. Never pick or scratch at the scales, as this can cause infection. While cradle cap may look concerning, it's not caused by poor hygiene and doesn't indicate any health problems. See a pediatrician if the condition spreads beyond the scalp, becomes red and inflamed, or doesn't improve with gentle care.",
        difficulty: "easy",
        tags: ["newborn", "health"]
    },
    {
        id: "baby_168",
        question: "When is it safe to introduce a small comfort object (lovey) in the crib with a baby?",
        options: ["From birth with supervision", "Around 2-3 months for naps only", "After 12 months when toddler transitions", "After 6 months when rolling both ways consistently"],
        correct: 2,
        explanation: "The American Academy of Pediatrics recommends keeping cribs completely bare for the first 12 months to reduce SIDS risk, meaning no comfort objects, blankets, bumpers, or toys should be placed in the crib during sleep. However, many experts now consider small, breathable comfort objects safe after 12 months when babies have developed stronger motor skills and can move objects away from their face if needed. Some families introduce loveys earlier for supervised comfort during awake time, but they should always be removed before sleep. Focus on other comfort strategies like swaddling (until rolling), white noise, pacifiers (after breastfeeding is established), and consistent routines. The safety of the sleep environment should always be the top priority over comfort objects.",
        difficulty: "medium",
        tags: ["newborn", "sleep", "safety"]
    },
    {
        id: "baby_169",
        question: "What should parents expect regarding bowel movement frequency in healthy breastfed newborns after the first few weeks?",
        options: ["Exactly 4-6 movements daily", "Wide variation from multiple daily to once weekly", "Consistent timing every 24 hours", "Decreasing frequency until completely regular"],
        correct: 1,
        explanation: "Breastfed newborn bowel movement frequency varies dramatically and both extremes can be completely normal. After the initial meconium phase and establishment of milk supply, some breastfed babies have several bowel movements daily while others may go up to 7-10 days between movements, both being normal if the baby is otherwise healthy, gaining weight, and the stool is soft when it comes. This variation occurs because breast milk is so efficiently absorbed that there may be little waste to eliminate. Warning signs include hard, dry stools, blood in stool, significant abdominal distension, vomiting, or failure to gain weight. Formula-fed babies typically have more regular, frequent bowel movements. Always consult your pediatrician if concerned about changes in your baby's patterns.",
        difficulty: "medium",
        tags: ["newborn", "health"]
    },
    {
        id: "baby_170",
        question: "What is the recommended method for cleaning a newborn's mouth before teeth emerge?",
        options: ["Use infant toothpaste on a soft brush", "Gently wipe gums with a clean, damp cloth after feeds", "Rinse with sterile water using a syringe", "Oral cleaning is unnecessary until first teeth appear"],
        correct: 1,
        explanation: "Clean newborn gums by gently wiping with a clean, damp cloth, gauze pad, or finger brush after feeding to remove milk residue and establish good oral hygiene habits. This practice helps prevent bacterial buildup, reduces risk of oral thrush (especially in bottle-fed babies), and familiarizes baby with mouth cleaning before teeth emerge. Use plain water only - no toothpaste, mouthwash, or cleaning products are needed or safe for newborns. This gentle cleaning also allows parents to check for signs of thrush (white patches that don't wipe away), teeth beginning to emerge, or other oral health concerns. Start this routine early to make teething and eventual tooth brushing easier transitions.",
        difficulty: "easy",
        tags: ["newborn", "health"]
    },
    {
        id: "baby_171",
        question: "What is the safest method for managing a newborn's sharp fingernails?",
        options: ["Trim with adult nail scissors when needed", "File gently with a soft emery board or use infant nail scissors", "Bite or peel the nails short", "Cover hands with mittens until nails naturally wear down"],
        correct: 1,
        explanation: "The safest approach is filing with a soft emery board or using specially designed infant nail scissors with rounded tips. Newborn nails are very soft and closely attached to the nail bed, making them easy to cut too short and cause bleeding or infection. File or trim when baby is sleeping or calm, after a bath when nails are softer, or while nursing. Never use adult nail clippers or scissors, which are too large and sharp. Avoid biting or peeling nails, which can introduce bacteria and cause irregular edges. While mittens prevent scratching temporarily, they shouldn't be used long-term as babies need to explore with their hands. Trim nails 1-2 times weekly as they grow quickly in newborns.",
        difficulty: "easy",
        tags: ["newborn", "safety"]
    },
    {
        id: "baby_172",
        question: "When should parents seek evaluation for concerns about their newborn's head shape?",
        options: ["Any noticeable flattening on one side", "Significant asymmetry persisting despite position changes by 2-3 months", "Head circumference measuring below average", "Fontanelles that feel slightly firm to touch"],
        correct: 1,
        explanation: "Seek evaluation for significant head asymmetry that persists or worsens despite consistent position changes, tummy time, and varying sleep positions by 2-3 months of age. Mild positional plagiocephaly (flat head syndrome) is common and often improves with repositioning, but severe cases may require helmet therapy for optimal correction. Also concerning are rigid skull sutures, premature fontanelle closure, or developmental delays accompanying head shape changes, which could indicate craniosynostosis requiring surgical intervention. Prevention includes daily supervised tummy time when awake, alternating head positions during sleep, limiting time in car seats/carriers when not traveling, and holding baby upright frequently. Most positional flattening improves significantly as babies become more mobile and spend less time lying down.",
        difficulty: "medium",
        tags: ["newborn", "health", "dev-0-6"]
    },
    {
        id: "baby_173",
        question: "What characterizes typical newborn growth spurts in the first month?",
        options: ["Predictable weekly occurrences requiring schedule adjustments", "Increased feeding frequency, fussiness, and temporary sleep disruption", "Steady weight gain without behavioral changes", "Need for formula supplementation to meet increased demands"],
        correct: 1,
        explanation: "Growth spurts typically occur around 2-3 weeks and 6 weeks, characterized by increased hunger, more frequent feeding demands, temporary fussiness, and disrupted sleep patterns lasting 2-4 days. Babies may want to nurse every hour, seem unsatisfied after feeds, and be more clingy or irritable. This is their natural way of increasing milk supply to meet growth needs. For breastfeeding mothers, frequent nursing during growth spurts signals the body to produce more milk - supplementing with formula can actually interfere with this natural supply-and-demand process. Trust your baby's cues and feed on demand. Growth spurts also coincide with developmental leaps, contributing to fussiness. Expect temporary disruption but know that normal patterns typically resume within a few days as baby adjusts to their new growth phase.",
        difficulty: "medium",
        tags: ["newborn", "dev-0-6", "breastfeeding"]
    },
    {
        id: "baby_174",
        question: "How should parents interpret different skin color changes in their newborn?",
        options: ["Any skin color variation requires emergency care", "Blue hands/feet (acrocyanosis) are normal, but blue lips/face require immediate attention", "Yellow skin coloring is always benign in newborns", "Mottled skin always indicates poor circulation"],
        correct: 1,
        explanation: "Acrocyanosis (blue coloring of hands and feet) is normal in newborns for the first few days due to immature circulation and doesn't require concern. However, central cyanosis (blue coloring of lips, face, tongue, or trunk) indicates inadequate oxygenation and requires immediate emergency medical attention. Mottled skin (lace-like pattern) is also normal when babies are cold and usually resolves with warming. Jaundice (yellow skin) requires monitoring - mild jaundice after 24 hours is common, but jaundice appearing in the first 24 hours, severe jaundice, or jaundice with lethargy and poor feeding needs immediate evaluation. Other concerning color changes include persistent pallor, gray coloring, or any sudden dramatic color changes. When in doubt, trust parental instincts and seek medical evaluation promptly.",
        difficulty: "medium",
        tags: ["newborn", "health"]
    },
    {
        id: "baby_175",
        question: "What is the normal size range for a newborn's anterior fontanelle (large soft spot) at birth?",
        options: ["Completely closed", "1-3 cm diamond-shaped", "4-6 cm diamond-shaped", "Varies too much to measure"],
        correct: 1,
        explanation: "The anterior fontanelle is typically 1-3 cm in diameter with a diamond shape at birth, though normal variation exists. This largest soft spot allows for brain growth and delivery through the birth canal. Parents should gently feel that it's soft and relatively flat - not sunken (which may indicate dehydration) or bulging (which could signal increased intracranial pressure). The posterior fontanelle is much smaller and triangular. Some babies are born with larger or smaller fontanelles within normal ranges. The anterior fontanelle gradually closes between 12-18 months as skull bones fuse.",
        difficulty: "medium",
        tags: ["newborn", "health"]
    },
    {
        id: "baby_176",
        question: "When do newborns typically begin to visually track moving objects with coordinated eye movements?",
        options: ["Within the first week", "2-3 weeks", "6-8 weeks", "3-4 months"],
        correct: 2,
        explanation: "Newborns typically begin true visual tracking around 6-8 weeks of age, though some may start as early as 4 weeks. Initially, babies can only focus clearly at 8-12 inches (perfect for seeing parents' faces during feeding). Before 6 weeks, eye movements may appear uncoordinated or crossed, which is usually normal. To encourage visual development, hold your face 8-12 inches away, make eye contact, and slowly move your head side to side. Use high-contrast black and white patterns or bright colors. If eyes remain consistently crossed after 3-4 months or you notice concerning differences between the eyes, consult your pediatrician for evaluation.",
        difficulty: "medium",
        tags: ["newborn", "dev-0-6"]
    },
    {
        id: "baby_177",
        question: "How long is a typical sleep cycle for a newborn baby?",
        options: ["20-30 minutes", "45-60 minutes", "90-120 minutes", "2-3 hours"],
        correct: 1,
        explanation: "Newborn sleep cycles last approximately 45-60 minutes, much shorter than adult cycles of 90-120 minutes. During each cycle, babies move through light sleep, deep sleep, and REM sleep phases. Newborns spend about 50% of their sleep time in active REM sleep (compared to 20% for adults), which is crucial for rapid brain development but makes them appear restless with movements, facial expressions, and brief awakenings. This shorter cycle length explains why newborns wake frequently throughout the day and night. Understanding this normal pattern helps parents set realistic expectations and avoid unnecessary sleep training attempts in the first few months.",
        difficulty: "medium",
        tags: ["newborn", "sleep"]
    },
    {
        id: "baby_178",
        question: "When is it safe to first give water to a healthy newborn baby?",
        options: ["Within the first few days for hydration", "At 2-3 weeks when feeding is established", "Only after 6 months of age", "When they show signs of thirst"],
        correct: 2,
        explanation: "Healthy newborns should not receive water until after 6 months of age. Breast milk and formula provide complete hydration and nutrition. Giving water to newborns is dangerous because their kidneys cannot process it properly, leading to water intoxication, electrolyte imbalances, and potentially life-threatening seizures. Water also fills tiny stomachs, reducing intake of essential calories and nutrients needed for growth. Even during hot weather, breast milk or formula adjusts to provide adequate hydration. The only exceptions are specific medical situations where a pediatrician prescribes small amounts of water, such as with certain medications. Always consult your healthcare provider before giving anything other than breast milk or formula.",
        difficulty: "easy",
        tags: ["newborn", "health", "safety"]
    },
    {
        id: "baby_179",
        question: "What causes newborn acne (neonatal acne) and how should parents manage it?",
        options: ["Poor hygiene; treat with gentle cleansers", "Maternal hormones; no treatment needed, resolves naturally", "Allergic reaction; eliminate potential triggers", "Blocked pores; use mild exfoliation"],
        correct: 1,
        explanation: "Newborn acne affects about 40% of babies and is caused by maternal hormones (particularly androgens) still circulating in the baby's bloodstream after birth. These hormones stimulate the baby's oil glands, causing small red bumps or pustules on the face, typically appearing at 2-4 weeks and resolving by 3-4 months without treatment. Parents should avoid scrubbing, applying lotions, or using acne medications, as these can irritate delicate newborn skin. Simply wash gently with plain water and pat dry. Unlike older child or adult acne, newborn acne is not related to hygiene, diet, or allergies. If the condition persists beyond 6 months or appears severe, consult your pediatrician to rule out other skin conditions.",
        difficulty: "easy",
        tags: ["newborn", "health"]
    },
    {
        id: "baby_180",
        question: "How should parents position their newborn's head during back sleeping to prevent flat head syndrome (positional plagiocephaly)?",
        options: ["Keep head perfectly centered at all times", "Alternate turning head left and right each sleep period", "Use positioning devices to maintain head position", "Place baby on side to avoid back of head pressure"],
        correct: 1,
        explanation: "Parents should gently alternate turning their baby's head to the left or right during each sleep period while maintaining the safe back-sleeping position. This simple practice helps prevent flat spots from developing on one side of the head. When putting baby down for sleep, gently turn the head to one side, then alternate to the other side for the next sleep. Additionally, provide plenty of supervised tummy time when awake (starting from birth), encourage feeding from both sides, limit time in car seats and bouncers when not traveling, and change the direction you place baby in the crib so they look toward different sides. Never use positioning devices or wedges in the crib, as these pose suffocation risks. Most positional plagiocephaly is preventable with these simple positioning changes.",
        difficulty: "medium",
        tags: ["newborn", "sleep", "safety"]
    },
    {
        id: "baby_181",
        question: "What is the normal respiratory rate range for a healthy newborn at rest?",
        options: ["10-20 breaths per minute", "30-60 breaths per minute", "60-80 breaths per minute", "Over 80 breaths per minute"],
        correct: 1,
        explanation: "A healthy newborn's respiratory rate ranges from 30-60 breaths per minute at rest, significantly faster than adults (12-20 breaths per minute). This higher rate is normal due to smaller lung capacity and higher metabolic demands. Newborn breathing patterns may be irregular with brief pauses (up to 10 seconds), followed by rapid breathing, which is called periodic breathing and is typically normal. Count breaths by watching the chest rise and fall for a full minute when baby is calm. Contact your pediatrician immediately if breathing exceeds 60 breaths per minute consistently, if there are pauses longer than 15-20 seconds, or if you notice signs of distress like grunting, flaring nostrils, chest retractions, or blue coloring around lips or face.",
        difficulty: "medium",
        tags: ["newborn", "health"]
    },
    {
        id: "baby_182",
        question: "When should parents be most concerned about newborn trembling or jitteriness?",
        options: ["Any visible trembling requires immediate evaluation", "Trembling that occurs only when baby is crying", "Trembling that continues when the limb is gently held still", "Trembling that happens only during feeding"],
        correct: 2,
        explanation: "Normal newborn jitteriness is common and typically stops when you gently hold or flex the affected limb. This benign trembling often occurs when babies are startled, crying, or during routine care and is caused by an immature nervous system. However, if trembling or rhythmic movements continue despite gently restraining the limb, this could indicate seizure activity and requires immediate medical evaluation. Other concerning signs include abnormal eye movements, color changes, breathing changes, or altered consciousness. Newborn seizures can be subtle and different from older children's seizures. Trust your instincts - if movements seem different from normal jitteriness or you're concerned about your baby's neurological responses, contact your pediatrician immediately. Some jitteriness may also occur with low blood sugar, so recent feeding history is relevant information to share with healthcare providers.",
        difficulty: "hard",
        tags: ["newborn", "health"]
    },
    {
        id: "baby_183",
        question: "What is the safest approach to sun exposure for babies under 6 months of age?",
        options: ["Daily direct sunlight for 10-15 minutes for vitamin D production", "Shade and protective clothing; avoid sunscreen except on small exposed areas", "Sunscreen on all exposed skin during any outdoor time", "Only morning or evening sun when UV rays are weakest"],
        correct: 1,
        explanation: "Babies under 6 months should be kept in shade and protected with clothing, hats, and stroller canopies rather than relying on sunscreen. Their delicate skin burns easily and absorbs chemicals more readily than adult skin. The AAP recommends avoiding sunscreen on babies under 6 months except on small areas (like face and hands) when adequate shade and clothing aren't possible. For vitamin D, exclusively breastfed babies need oral vitamin D supplements (400 IU daily) rather than sun exposure. When outdoors, use tightly woven clothing, wide-brimmed hats, and UV-protective stroller covers. Seek shade especially between 10 AM and 4 PM when UV rays are strongest. After 6 months, broad-spectrum SPF 30+ sunscreen becomes the primary protection method along with continued use of protective clothing and shade.",
        difficulty: "medium",
        tags: ["newborn", "safety", "health"]
    },
    {
        id: "baby_184",
        question: "What stool pattern should parents expect for their newborn in the first month of life?",
        options: ["Consistent yellow, seedy stools from birth", "Dark meconium for 2-3 days, then color/consistency varies by feeding method", "Brown, formed stools similar to older children", "Watery, clear stools for the first week"],
        correct: 1,
        explanation: "Newborn stool appearance follows a predictable progression: meconium (dark green/black, sticky, tar-like) for the first 2-3 days, followed by transitional stools (greenish-brown, less sticky) as feeding establishes. By day 4-5, stool appearance depends on feeding method. Breastfed babies typically have yellow, seedy, loose stools that may occur with each feeding or just once weekly (both normal). Formula-fed babies have tan to yellow, firmer, paste-like stools usually 1-4 times daily. Normal variations include occasional green stools (often from rapid transit), small amounts of mucus, or varying frequency. Concerning signs requiring pediatric evaluation include white/clay-colored stools (possible liver problems), red blood, black stools after meconium clears, or complete absence of stools beyond the first few days of life.",
        difficulty: "medium",
        tags: ["newborn", "health"]
    },
    {
        id: "baby_185",
        question: "How long does it typically take for the uterus to return to its pre-pregnancy size after delivery?",
        options: ["2-3 weeks", "4-6 weeks", "8-10 weeks", "12-16 weeks"],
        correct: 1,
        explanation: "The uterus takes approximately 4-6 weeks to return to its pre-pregnancy size through a process called involution. During this time, the uterine muscle contracts to compress blood vessels and shrink from about 2 pounds back to its normal 2-ounce size. You'll experience these contractions as afterpains, which are typically stronger during breastfeeding due to oxytocin release and more noticeable in subsequent pregnancies. The uterus should no longer be palpable above the pubic bone by 2 weeks postpartum. Contact your healthcare provider if you experience severe pain, fever, or heavy bleeding, as these could indicate complications like infection or retained placental tissue.",
        difficulty: "medium",
        tags: ["postpartum"]
    },
    {
        id: "baby_186",
        question: "What is the normal duration for lochia (postpartum bleeding) after delivery?",
        options: ["1-2 weeks", "2-4 weeks", "4-6 weeks", "6-8 weeks"],
        correct: 2,
        explanation: "Lochia typically lasts 4-6 weeks after delivery, progressing through three distinct stages. Lochia rubra (bright red with clots) lasts 3-4 days, followed by lochia serosa (pink to brown) from days 4-10, then lochia alba (white to yellow) from weeks 2-6. The flow should gradually decrease over time. Contact your healthcare provider if you experience bright red bleeding after lochia has turned pink, bleeding that soaks more than one pad per hour for two consecutive hours, large clots (bigger than a golf ball), or foul-smelling discharge, as these may indicate infection or retained placental tissue. Breastfeeding may cause temporary increases in bleeding due to uterine contractions.",
        difficulty: "easy",
        tags: ["postpartum"]
    },
    {
        id: "baby_187",
        question: "When is it typically safe to resume sexual activity after childbirth?",
        options: ["2-3 weeks postpartum", "After your healthcare provider clears you at 4-6 weeks", "8-10 weeks postpartum", "As soon as bleeding stops completely"],
        correct: 1,
        explanation: "Most healthcare providers recommend waiting until after your postpartum checkup at 4-6 weeks to resume sexual activity. This allows time for the cervix to close, uterine lining to heal, and any perineal tears or episiotomy sites to recover properly. However, physical healing is only one consideration - emotional readiness, comfort with body changes, and fatigue are equally important factors. Many women need additional time beyond medical clearance. When you do resume intimacy, expect some discomfort initially, especially if breastfeeding (which can cause vaginal dryness). Use adequate lubrication and communicate openly with your partner. Don't forget about contraception - fertility can return before your first postpartum period, even while breastfeeding.",
        difficulty: "easy",
        tags: ["postpartum"]
    },
    {
        id: "baby_188",
        question: "What characterizes normal postpartum breast changes in non-breastfeeding mothers?",
        options: ["Breasts remain enlarged and tender for 2-3 months", "Engorgement peaks at 3-5 days then gradually resolves over 1-2 weeks", "Milk production stops immediately after delivery", "Breasts return to pre-pregnancy size within 24 hours"],
        correct: 1,
        explanation: "Even mothers who don't breastfeed will experience milk production beginning 2-3 days postpartum, causing breast engorgement that typically peaks around days 3-5. Without nursing stimulation, milk production naturally decreases over 7-14 days. During this time, breasts may feel full, hard, and tender. Comfort measures include wearing a well-fitting supportive bra, applying cold packs, taking over-the-counter pain relievers, and avoiding nipple stimulation. Some women experience emotional effects from engorgement due to hormonal changes. Avoid expressing milk or pumping, as this signals continued milk production. Contact your healthcare provider if you develop fever, red streaks, or severe pain, which could indicate mastitis.",
        difficulty: "medium",
        tags: ["postpartum"]
    },
    {
        id: "baby_189",
        question: "When is it typically safe to return to exercise after an uncomplicated vaginal delivery?",
        options: ["1-2 weeks for all activities", "2-4 weeks with medical clearance", "4-6 weeks with gradual progression", "8-12 weeks minimum for any exercise"],
        correct: 2,
        explanation: "After an uncomplicated vaginal delivery, most women can begin gentle exercise like walking within days, but should wait for medical clearance (usually 4-6 weeks) before returning to more intensive activities. Start with low-impact exercises like walking, pelvic floor exercises, and gentle stretching. Gradually progress to pre-pregnancy activities over several weeks. Avoid high-impact exercises, heavy lifting (over 10-15 pounds initially), and activities that increase abdominal pressure until cleared by your healthcare provider. Stop exercising if you experience heavy bleeding, dizziness, chest pain, or pelvic pressure. If you had complications like a third- or fourth-degree tear, cesarean delivery, or other issues, you may need to wait longer and follow specific restrictions.",
        difficulty: "medium",
        tags: ["postpartum"]
    },
    {
        id: "baby_190",
        question: "Which postpartum symptom requires immediate emergency medical attention?",
        options: ["Mild mood changes and tearfulness", "Bleeding that soaks more than one pad per hour for 2+ hours", "Breast tenderness during engorgement", "Fatigue from nighttime feedings"],
        correct: 1,
        explanation: "Postpartum hemorrhage is a life-threatening emergency requiring immediate medical attention. Warning signs include bleeding that soaks more than one pad per hour for two consecutive hours, passing clots larger than a golf ball, or sudden heavy bleeding after it had decreased. Other emergency symptoms include severe headache with vision changes (possible preeclampsia), fever over 100.4°F (38°C), severe abdominal pain, chest pain or difficulty breathing, and signs of infection like foul-smelling discharge. Additional concerning symptoms include severe mood changes with thoughts of harming yourself or baby, leg pain or swelling (possible blood clot), and inability to urinate. Trust your instincts - if something feels seriously wrong, seek immediate medical care rather than waiting for your next appointment.",
        difficulty: "easy",
        tags: ["postpartum", "health"]
    },
    {
        id: "baby_191",
        question: "How long do major activity restrictions typically last after a cesarean section?",
        options: ["1-2 weeks for all restrictions", "2-4 weeks for most activities", "6-8 weeks for full recovery", "3-4 months before normal activity"],
        correct: 2,
        explanation: "Cesarean section recovery typically requires 6-8 weeks for full healing, though restrictions vary by activity. Most women can't lift more than their baby (8-10 pounds) for the first 2 weeks, then gradually increase to normal lifting by 6-8 weeks. Driving is usually restricted for 1-2 weeks or until you can safely perform an emergency stop without pain. Exercise beyond gentle walking typically waits until 6-8 weeks with medical clearance. The incision heals in layers - skin heals in 1-2 weeks, but deeper tissue takes much longer. Watch for signs of infection including increased redness, warmth, swelling, or drainage from the incision. Some numbness around the incision is normal and may last months. Follow your healthcare provider's specific instructions, as recovery time can vary based on individual healing and any complications.",
        difficulty: "medium",
        tags: ["postpartum"]
    },
    {
        id: "baby_192",
        question: "What primarily causes the \"baby blues\" and when do they typically resolve?",
        options: ["Hormonal changes; resolve within 2 weeks postpartum", "Sleep deprivation; resolve when baby sleeps through night", "Breastfeeding difficulties; resolve when feeding established", "Relationship stress; resolve with family counseling"],
        correct: 0,
        explanation: "Baby blues are primarily caused by dramatic hormonal changes after delivery, especially rapidly dropping estrogen and progesterone levels, combined with physical exhaustion and life adjustment. They affect 70-80% of new mothers, typically beginning 2-3 days postpartum and resolving within 2 weeks. Symptoms include mood swings, crying spells, anxiety, irritability, and feeling overwhelmed. Self-care measures like rest, nutrition, gentle exercise, and support from family help. However, if symptoms persist beyond 2 weeks, worsen, or include thoughts of harming yourself or baby, this may indicate postpartum depression or anxiety requiring professional treatment. Distinguishing factors include duration (baby blues are brief), severity (depression is more intense), and functional impairment (depression significantly affects daily functioning). Don't hesitate to contact your healthcare provider if you're concerned.",
        difficulty: "easy",
        tags: ["postpartum"]
    },
    {
        id: "baby_193",
        question: "When do postpartum night sweats typically resolve?",
        options: ["Within the first week postpartum", "2-3 weeks postpartum", "4-6 weeks postpartum", "Only after menstruation returns"],
        correct: 2,
        explanation: "Postpartum night sweats typically resolve within 4-6 weeks as your body adjusts hormonally and eliminates excess fluid retained during pregnancy. These sweats are caused by fluctuating hormone levels, particularly estrogen, and your body's natural process of shedding the extra 2-3 pounds of fluid gained during pregnancy. Night sweats are most intense in the first 1-2 weeks postpartum and gradually decrease. To manage discomfort, wear breathable cotton clothing, use lightweight bedding, keep your room cool, and stay hydrated. Change damp clothing promptly to prevent chills. Contact your healthcare provider if sweats are accompanied by fever, chills, or other signs of infection, or if they seem excessive or persist beyond 6 weeks, as this could indicate a hormonal imbalance or other underlying condition.",
        difficulty: "easy",
        tags: ["postpartum"]
    },
    {
        id: "baby_194",
        question: "What is the recommended approach to perineal care after vaginal delivery?",
        options: ["Use antiseptic solutions and scrub twice daily", "Gently cleanse with warm water and apply comfort measures", "Avoid all water contact for the first week", "Apply medicated powders to keep the area dry"],
        correct: 1,
        explanation: "Proper perineal care after vaginal delivery focuses on gentle cleansing and comfort measures to promote healing. Cleanse the area with warm water after using the bathroom, patting dry from front to back to prevent bacterial contamination. Use a peri-bottle (squirt bottle) to rinse while urinating to dilute acidic urine that can sting healing tissues. Comfort measures include warm sitz baths 2-3 times daily, witch hazel pads, ice packs for the first 24 hours, and over-the-counter pain relievers as directed. Change pads frequently and avoid harsh soaps, douching, or antiseptic solutions that can irritate healing tissue. Healing typically takes 4-6 weeks for minor tears, longer for more extensive repairs. Contact your healthcare provider for increasing pain, foul-smelling discharge, or signs of infection like fever or spreading redness.",
        difficulty: "easy",
        tags: ["postpartum"]
    },
    {
        id: "baby_195",
        question: "What causes postpartum hair loss and when does it typically peak?",
        options: ["Nutritional deficiency; occurs if not taking prenatal vitamins", "Hormonal changes; peaks at 3-4 months postpartum", "Stress from new parenthood; occurs during first month", "Breastfeeding demands; continues until weaning"],
        correct: 1,
        explanation: "Postpartum hair loss is a normal hormonal process affecting up to 90% of new mothers. During pregnancy, elevated estrogen keeps hair in the growth phase longer, creating thicker hair. After delivery, estrogen drops dramatically, causing this \"extra\" hair to enter the shedding phase simultaneously. Hair loss typically begins 1-3 months postpartum, peaks around 3-4 months, and gradually improves by 6-12 months. You may lose 100-300 hairs daily (compared to the normal 50-100). This can be emotionally distressing, but hair will regrow. Management includes gentle hair care, avoiding tight hairstyles, using a wide-tooth comb, and considering shorter styles for easier maintenance. Severe or persistent hair loss beyond one year may indicate underlying conditions like thyroid dysfunction and warrants medical evaluation.",
        difficulty: "medium",
        tags: ["postpartum"]
    },
    {
        id: "baby_196",
        question: "What is diastasis recti and how common is it postpartum?",
        options: ["Uterine prolapse affecting 10% of postpartum women", "Abdominal muscle separation affecting 60% of postpartum women", "Perineal scar tissue affecting 30% of women after delivery", "Pelvic joint dysfunction affecting 40% of women postpartum"],
        correct: 1,
        explanation: "Diastasis recti is the separation of the rectus abdominis (six-pack) muscles along the midline, affecting approximately 60% of pregnant and postpartum women. During pregnancy, these muscles stretch and separate to accommodate the growing baby. You can check for this condition by lying on your back, lifting your head slightly, and feeling for a gap between the muscle bands above and below your navel. A separation of more than 2 finger-widths typically indicates diastasis recti. While some separation improves naturally within 6-8 weeks postpartum, many women need specific exercises targeting the deep core muscles. Physical therapy can be very effective. Avoid traditional crunches and sit-ups, which can worsen the condition. Severe cases may require surgical repair, but most improve with proper exercise and time.",
        difficulty: "medium",
        tags: ["postpartum"]
    },
    {
        id: "baby_197",
        question: "When should mothers typically expect their first postpartum menstrual period if they are not breastfeeding?",
        options: ["2-4 weeks after delivery", "6-8 weeks after delivery", "10-12 weeks after delivery", "16-20 weeks after delivery"],
        correct: 1,
        explanation: "Non-breastfeeding mothers typically resume menstruation 6-8 weeks after delivery, with most experiencing their first period between 6-10 weeks postpartum. The first few cycles may be irregular, heavier, or lighter than pre-pregnancy periods as hormones rebalance. Importantly, ovulation typically occurs 2-4 weeks before the first period, meaning fertility returns earlier than menstruation. Factors affecting timing include individual hormonal recovery, stress levels, and any retained placental tissue. Even minimal breastfeeding can delay menstruation significantly. Mothers should discuss contraception options at their 6-week postpartum visit, as pregnancy can occur before the first period returns.",
        difficulty: "medium",
        tags: ["postpartum"]
    },
    {
        id: "baby_198",
        question: "What is the most effective approach to managing postpartum constipation?",
        options: ["Prescription laxatives as first-line treatment", "Increased fiber, fluids, gentle movement, and stool softeners as needed", "Complete bed rest and avoiding all physical activity", "Restricting fluid intake to reduce bathroom trips"],
        correct: 1,
        explanation: "Postpartum constipation affects up to 25% of new mothers due to hormonal changes, iron supplements, pain medications, fear of straining with episiotomy or hemorrhoids, and decreased mobility. Effective management includes increasing fiber intake (fruits, vegetables, whole grains), drinking 8-10 glasses of water daily, gentle walking as tolerated, and over-the-counter stool softeners like docusate. Additional helpful strategies include establishing regular toilet times, elevating feet on a small stool while toileting, and performing pelvic floor exercises. Avoid straining, which can worsen hemorrhoids. Contact your healthcare provider if constipation persists beyond a few days or if you experience severe abdominal pain, as this may indicate complications.",
        difficulty: "easy",
        tags: ["postpartum"]
    },
    {
        id: "baby_199",
        question: "How long should mothers typically avoid lifting anything heavier than their baby after a cesarean section?",
        options: ["1-2 weeks", "4-6 weeks", "8-10 weeks", "12-16 weeks"],
        correct: 1,
        explanation: "After cesarean delivery, mothers should avoid lifting more than 10-15 pounds (heavier than their baby) for 4-6 weeks to allow proper healing of the abdominal incision and underlying tissues. This restriction prevents complications including incisional hernia, wound dehiscence (separation), and delayed healing. The uterine incision also needs time to heal completely. Signs of overdoing activity include increased bleeding, pelvic pressure, or incisional pain. Mothers with toddlers should arrange help for lifting children and heavy household tasks. After 6 weeks, gradual return to normal lifting occurs with healthcare provider clearance. Some providers may extend restrictions based on individual healing progress, surgical complications, or previous abdominal surgeries.",
        difficulty: "easy",
        tags: ["postpartum"]
    },
    {
        id: "baby_200",
        question: "What primarily causes postpartum joint pain and stiffness, and when does it typically resolve?",
        options: ["Calcium deficiency requiring immediate supplementation, resolves in 2-3 weeks", "Hormonal changes affecting ligaments and joints, typically resolves in 3-6 months", "Permanent structural damage from pregnancy weight gain", "Serious infection requiring immediate antibiotic treatment"],
        correct: 1,
        explanation: "Postpartum joint pain affects up to 45% of new mothers and is primarily caused by hormonal fluctuations, particularly elevated relaxin levels that persist after delivery, making ligaments and joints loose and unstable. This commonly affects wrists, fingers, hips, pelvis, and lower back. Breastfeeding can prolong symptoms due to continued hormonal changes and repetitive positioning. Most joint pain resolves within 3-6 months as hormone levels normalize, though breastfeeding mothers may experience symptoms longer. Management includes gentle stretching, proper ergonomics during feeding, wrist supports if needed, and anti-inflammatory medications if approved by your provider. Seek medical evaluation for severe pain, swelling, redness, or symptoms that worsen rather than gradually improve.",
        difficulty: "medium",
        tags: ["postpartum"]
    },
    {
        id: "baby_201",
        question: "When do postpartum hemorrhoids typically resolve without medical intervention?",
        options: ["Within 1-2 days after delivery", "Within 2-4 weeks postpartum", "Within 6-12 weeks postpartum", "They require surgical intervention to resolve"],
        correct: 2,
        explanation: "Postpartum hemorrhoids typically resolve within 6-12 weeks as rectal pressure decreases, swelling subsides, and tissues return to normal. They develop due to increased pressure during pregnancy, straining during delivery, and postpartum constipation. Most respond well to conservative treatment including sitz baths, topical treatments, stool softeners, and increased fiber and fluid intake. Hemorrhoidal symptoms usually peak in the first week postpartum and gradually improve. Seek medical evaluation for severe pain, significant bleeding, prolapsed hemorrhoids that don't reduce, or signs of infection. While most resolve naturally, some women may need medical procedures if symptoms persist beyond 12 weeks or significantly impact quality of life.",
        difficulty: "medium",
        tags: ["postpartum"]
    },
    {
        id: "baby_202",
        question: "What is the primary cause of postpartum back pain in the first few months after delivery?",
        options: ["Kidney complications from pregnancy and delivery", "Poor posture during infant care combined with weakened core muscles", "Permanent spinal damage from epidural anesthesia", "Severe calcium deficiency affecting bone strength"],
        correct: 1,
        explanation: "Postpartum back pain primarily results from poor posture during feeding, lifting, and carrying activities combined with weakened abdominal muscles and ligament laxity from pregnancy hormones like relaxin. Common problematic positions include hunching over while breastfeeding, carrying car seats, and lifting the baby with a rounded back. Additional contributing factors include diastasis recti (abdominal separation), sleep deprivation affecting posture awareness, and spending long periods in awkward positions. Prevention includes proper ergonomics during feeding (use pillows for support), strengthening core muscles gradually, using proper lifting techniques, and taking frequent position breaks. Most postpartum back pain resolves with attention to posture, gentle exercise, and core strengthening, though persistent severe pain warrants medical evaluation.",
        difficulty: "medium",
        tags: ["postpartum"]
    },
    {
        id: "baby_203",
        question: "How long after delivery do postpartum night sweats typically continue?",
        options: ["1-2 days", "1-2 weeks", "4-6 weeks", "6-12 months continuously"],
        correct: 2,
        explanation: "Postpartum night sweats typically last 4-6 weeks as the body eliminates excess fluid retained during pregnancy and hormone levels readjust after delivery. These sweats can be quite profuse, often soaking sleepwear and sheets, and are caused by rapid hormonal fluctuations, particularly decreasing estrogen and progesterone levels. The body also eliminates approximately 3 liters of excess fluid accumulated during pregnancy through sweating and urination. Breastfeeding mothers may experience night sweats longer due to continued hormonal changes and the body's increased metabolic demands. Management includes wearing breathable fabrics, using moisture-wicking sheets, staying hydrated, and keeping a change of clothes nearby. While uncomfortable, postpartum night sweats are completely normal. Contact your provider if accompanied by fever, chills, or other signs of infection.",
        difficulty: "easy",
        tags: ["postpartum"]
    },
    {
        id: "baby_204",
        question: "When should mothers be most concerned about postpartum abdominal muscle separation (diastasis recti)?",
        options: ["If any separation is detectable at 2 weeks postpartum", "If separation is wider than 2-3 finger widths at 8 weeks postpartum", "If any separation remains at 6 months postpartum", "All separation requires immediate surgical correction"],
        correct: 1,
        explanation: "Diastasis recti becomes concerning when separation exceeds 2-3 finger widths (approximately 2.7 cm) at 8 weeks postpartum, as some initial separation is normal after pregnancy. To assess, lie on your back with knees bent, lift your head slightly, and feel above and below your navel for gaps between muscle bands. Most separation improves naturally within 8 weeks through appropriate core exercises focusing on deep abdominal muscles and avoiding exercises that bulge the abdomen (like traditional crunches). Persistent wide separation may cause functional problems including back pain, pelvic floor dysfunction, and poor posture. Physical therapy specializing in postpartum recovery can provide targeted exercises. Surgical repair is rarely needed and typically reserved for separations wider than 4-5 finger widths that don't respond to conservative treatment and cause significant functional impairment.",
        difficulty: "hard",
        tags: ["postpartum"]
    },
    {
        id: "baby_205",
        question: "What is the typical pattern for postpartum breast engorgement in non-breastfeeding mothers?",
        options: ["Peaks at 1-2 days postpartum and resolves within one week", "Peaks at 3-5 days postpartum and resolves within 1-2 weeks", "Continues steadily for 4-6 weeks without improvement", "Never occurs in mothers who choose not to breastfeed"],
        correct: 1,
        explanation: "Non-breastfeeding mothers typically experience breast engorgement that peaks around days 3-5 postpartum when mature milk production begins, then gradually resolves within 1-2 weeks as milk production naturally decreases without stimulation. This engorgement can be quite uncomfortable, causing breast fullness, tenderness, and sometimes low-grade fever. Management includes wearing a well-fitting, supportive bra (not binding tightly), applying cold compresses, taking appropriate pain medication, and avoiding breast stimulation including hot showers on breasts or pumping, which can increase milk production. Some mothers find chilled cabbage leaves provide comfort. Contact your healthcare provider for fever above 100.4°F, red streaking, or signs of mastitis, as these indicate potential complications requiring treatment.",
        difficulty: "medium",
        tags: ["postpartum"]
    },
    {
        id: "baby_206",
        question: "How long should mothers expect postpartum fatigue to be most severe?",
        options: ["First 2-3 days only", "First 2-3 weeks", "First 2-3 months", "Consistently throughout the entire first year"],
        correct: 2,
        explanation: "Postpartum fatigue is typically most severe during the first 2-3 months due to multiple factors including physical recovery from delivery, dramatic hormonal changes, frequent night wakings disrupting sleep cycles, increased caloric demands from breastfeeding, and the constant demands of newborn care. Iron deficiency from blood loss during delivery can also contribute significantly. While some fatigue continues throughout the first year due to ongoing sleep disruption, the overwhelming exhaustion usually peaks in the first 8-12 weeks. Strategies include accepting help, sleeping when baby sleeps, maintaining good nutrition, gentle exercise as cleared by your provider, and asking family to help with household tasks. Concerning signs include fatigue that worsens rather than gradually improves, accompanied by depression or anxiety symptoms, or extreme exhaustion that interferes with baby care.",
        difficulty: "medium",
        tags: ["postpartum"]
    },
    {
        id: "baby_207",
        question: "What is the recommended approach to caring for perineal tears or episiotomy sites postpartum?",
        options: ["Keep the area completely dry and avoid all water contact", "Use warm water rinses, gentle patting dry, and sitz baths as needed", "Apply antibiotic ointment three times daily for two weeks", "Avoid all cleaning for the first week to prevent disruption"],
        correct: 1,
        explanation: "Proper perineal wound care involves gentle cleansing with warm water after each bathroom visit, either using a peri-bottle (squirt bottle) or letting water run over the area in the shower. Pat dry gently with clean toilet paper or soft cloth - never wipe. Sitz baths 2-3 times daily can provide comfort and promote healing by increasing blood flow to the area. Change pads frequently to maintain cleanliness and prevent infection. Avoid harsh soaps, douching, or scrubbing the area. Normal healing includes some swelling, bruising, and discomfort that peaks around day 3 and gradually improves over 2-3 weeks. Contact your provider for increasing pain, foul odor, excessive bleeding, pus, red streaking, or fever, which may indicate infection. Most tears heal completely within 4-6 weeks with proper care.",
        difficulty: "easy",
        tags: ["postpartum"]
    },
    {
        id: "baby_208",
        question: "What should mothers expect regarding returning to pre-pregnancy weight postpartum?",
        options: ["Complete weight loss within 2-4 weeks after delivery", "Return to pre-pregnancy weight within 6-12 months for all mothers", "Universal timeline of 2 years maximum for all mothers", "Weight loss timeline varies greatly among individuals, and some permanent retention is normal"],
        correct: 3,
        explanation: "Postpartum weight loss varies dramatically among individuals based on factors including pre-pregnancy weight, gestational weight gain, breastfeeding status, genetics, lifestyle, and hormonal changes. While many mothers lose pregnancy weight within 6-18 months, it's completely normal for some women to retain 5-10 pounds permanently or take 2+ years to reach their goal weight. Immediate postpartum weight loss includes baby, placenta, and amniotic fluid (12-15 pounds), followed by gradual loss of increased blood volume and fluid retention. Breastfeeding may help with weight loss but also increases appetite and changes body composition. Focusing on healthy eating, gradual activity increase, and realistic expectations is more beneficial than strict timelines. Rapid weight loss can affect milk supply and energy levels. Most importantly, body shape may change permanently regardless of weight loss.",
        difficulty: "medium",
        tags: ["postpartum"]
    },
    {
        id: "baby_209",
        question: "What is the recommended care for cesarean section incision sites during the first two weeks postpartum?",
        options: ["Keep covered with fresh bandages daily and avoid water contact", "Clean with alcohol or hydrogen peroxide twice daily to prevent infection", "Keep clean and dry, shower normally, pat dry gently, and allow air exposure", "Apply prescription antibiotic ointment daily and keep tightly bandaged"],
        correct: 2,
        explanation: "C-section incisions heal best when kept clean and dry with normal showering allowed after 24 hours. Gently pat dry and allow air exposure - most incisions don't need bandages after the first few days unless actively draining. Steri-strips should be left alone to fall off naturally. Avoid baths, hot tubs, and swimming until cleared by your doctor. Watch for warning signs including increasing redness beyond the incision line, warmth, swelling, foul-smelling or increased drainage, separation of wound edges, or fever. The incision may feel numb, tight, or itchy as it heals - this is normal. Loose, comfortable clothing helps prevent irritation.",
        difficulty: "medium",
        tags: ["postpartum", "health"]
    },
    {
        id: "baby_210",
        question: "When should new mothers typically expect their sleep patterns to return to pre-pregnancy quality?",
        options: ["Within 4-6 weeks postpartum once hormones stabilize", "By 8-12 weeks when babies sleep longer stretches", "Around 4-6 months when babies develop circadian rhythms", "Between 6 months to 1 year as babies sleep through the night consistently"],
        correct: 3,
        explanation: "Most mothers don't return to pre-pregnancy sleep quality until 6 months to 1 year postpartum. Factors affecting sleep recovery include baby's individual sleep development, feeding method (breastfeeding mothers often experience more sleep disruption due to hormones and frequent feeding), hormonal changes, and recovery from birth. While babies may sleep longer stretches by 3-4 months, consistent sleep through the night varies greatly. Sleep deprivation is normal and expected - prioritize rest when possible by sleeping when baby sleeps, accepting help with night feedings, and sharing night duties if bottle feeding. Maternal sleep often doesn't fully normalize until weaning occurs due to prolactin's effects on sleep architecture.",
        difficulty: "medium",
        tags: ["postpartum", "sleep"]
    },
    {
        id: "baby_211",
        question: "What is the typical timeline for pelvic floor recovery after vaginal delivery?",
        options: ["Complete recovery occurs by the 6-week postpartum check-up", "Most improvement happens within 3 months postpartum", "Significant recovery typically takes 6-12 months postpartum", "Recovery is usually finished by 4-6 months postpartum"],
        correct: 2,
        explanation: "Pelvic floor recovery after vaginal delivery typically takes 6-12 months, with some aspects continuing to improve beyond the first year. The pelvic floor muscles, connective tissue, and nerves need time to heal and regain strength after supporting pregnancy and stretching during delivery. Recovery affects urinary continence, bowel control, sexual function, and pelvic organ support. Begin gentle Kegel exercises as soon as comfortable postpartum, but full exercise programs should wait until cleared by your provider. Up to 45% of women experience some pelvic floor dysfunction after childbirth, but this is treatable. Seek evaluation if you have persistent incontinence, pelvic pressure, pain with intercourse, or prolapse symptoms beyond 3 months postpartum, as specialized pelvic floor physical therapy can be highly effective.",
        difficulty: "medium",
        tags: ["postpartum", "health"]
    },
    {
        id: "baby_212",
        question: "How long do second-degree perineal tears typically take to heal completely?",
        options: ["2-3 weeks for complete healing", "4-5 weeks for complete tissue repair", "6-8 weeks for complete healing and strength", "3-4 weeks with proper wound care"],
        correct: 2,
        explanation: "Second-degree perineal tears (extending through skin, muscle, and tissue but not the anal sphincter) typically take 6-8 weeks for complete healing and tissue strength, though surface healing occurs within 2-3 weeks. Initial sutures dissolve within 2-4 weeks. During healing, expect some discomfort, swelling, and bruising initially. Use ice packs for the first 24-48 hours, then warm sitz baths 2-3 times daily. Keep the area clean by patting dry and changing pads frequently. Pain should gradually decrease - persistent or worsening pain, foul odor, increasing redness, or wound separation requires medical evaluation. Sexual activity is typically cleared at 6-8 weeks when tissues have regained strength. Some women may experience temporary or persistent discomfort that benefits from specialized care.",
        difficulty: "medium",
        tags: ["postpartum", "health"]
    },
    {
        id: "baby_213",
        question: "When do abdominal muscles typically regain their pre-pregnancy strength and function after delivery?",
        options: ["By the 6-8 week postpartum clearance visit", "Within 4-6 months with regular exercise", "Between 6-12 months postpartum for most women", "Recovery timeline varies greatly, from 6 months to 2+ years"],
        correct: 3,
        explanation: "Abdominal muscle recovery varies dramatically between individuals, taking anywhere from 6 months to over 2 years depending on multiple factors. Recovery depends on pre-pregnancy fitness, pregnancy weight gain, baby's size, number of pregnancies, genetics, and presence of diastasis recti (abdominal separation). Some separation of the rectus abdominis muscles is normal during pregnancy, but significant diastasis recti (gap wider than 2-3 finger widths) affects about 60% of postpartum women and slows recovery. Begin gentle core exercises only after medical clearance, starting with breathing exercises and pelvic tilts before progressing to more challenging movements. Avoid traditional crunches initially if diastasis recti is present. Consider evaluation by a specialized physical therapist if you have persistent back pain, pelvic floor issues, or significant abdominal separation beyond 6 months postpartum.",
        difficulty: "hard",
        tags: ["postpartum", "health"]
    },
    {
        id: "baby_214",
        question: "How long do significant hormonal fluctuations typically continue after childbirth?",
        options: ["Until lochia stops, around 6-8 weeks postpartum", "For 3-4 months while the body readjusts postpartum", "Throughout the entire breastfeeding period if nursing", "For 6-12 months regardless of feeding method"],
        correct: 2,
        explanation: "Significant hormonal fluctuations continue throughout the entire breastfeeding period due to elevated prolactin and oxytocin levels, which suppress normal ovarian hormone production. For non-breastfeeding mothers, hormones typically stabilize within 6-12 months postpartum. These fluctuations affect mood, energy levels, libido, sleep patterns, hair and skin changes, and menstrual cycle return. Breastfeeding mothers often experience continued amenorrhea, vaginal dryness, decreased libido, and mood sensitivity due to suppressed estrogen. Night sweats, joint aches, and emotional sensitivity are common during this hormonal transition. Understanding that these changes are normal biological responses helps with adjustment. Severe mood changes, persistent anxiety, or depression warrant professional evaluation as these may indicate postpartum mood disorders requiring treatment beyond normal hormonal adjustment.",
        difficulty: "medium",
        tags: ["postpartum"]
    },
    {
        id: "baby_215",
        question: "When should mothers typically expect their energy levels to return to pre-pregnancy levels?",
        options: ["By their 6-week postpartum check-up", "Around 4-6 months once sleep improves", "Between 6-12 months as babies become more predictable", "Energy recovery varies greatly, typically 6 months to 2+ years"],
        correct: 3,
        explanation: "Postpartum energy recovery is highly individual, typically taking 6 months to over 2 years depending on multiple factors. Sleep deprivation, breastfeeding demands, hormonal changes, physical recovery, and caring for children all impact energy levels. Additional factors include pre-pregnancy fitness, birth experience, anemia, thyroid function, mood disorders, support systems, and number of children. Breastfeeding mothers may experience prolonged fatigue due to increased caloric demands and hormone effects. Strategies to support energy recovery include prioritizing sleep when possible, eating nutrient-dense foods, gentle exercise when cleared, accepting help, and addressing medical issues like anemia or thyroid dysfunction. Persistent severe fatigue, especially with mood changes, difficulty concentrating, or physical symptoms, should be evaluated for postpartum depression, anxiety, thyroid disorders, or other medical conditions that can significantly impact recovery.",
        difficulty: "medium",
        tags: ["postpartum"]
    },
    {
        id: "baby_216",
        question: "What primarily causes the widespread joint pain and stiffness that many women experience in the first months postpartum?",
        options: ["Calcium and vitamin D deficiency from breastfeeding demands", "Persistent relaxin hormone effects combined with new postural stresses", "Deconditioning and muscle weakness from pregnancy and delivery", "Inflammatory response from tissue healing after delivery"],
        correct: 1,
        explanation: "Postpartum joint pain results primarily from persistent relaxin hormone effects (which can continue 3-5 months postpartum) combined with new postural stresses from carrying, lifting, and feeding babies in awkward positions. Relaxin softens ligaments and joints during pregnancy and doesn't immediately disappear after delivery, leaving joints temporarily unstable. Meanwhile, repetitive activities like nursing, carrying car seats, and prolonged holding create new mechanical stresses. Common areas affected include wrists, thumbs, neck, shoulders, and lower back. Management includes gentle stretching, proper positioning during feeding, ergonomic adjustments, supportive devices when needed, and gradual return to strengthening exercises. Most joint discomfort resolves within 6 months postpartum, but persistent or severe pain, especially with swelling or numbness, should be evaluated for conditions like carpal tunnel syndrome or other issues requiring specific treatment.",
        difficulty: "medium",
        tags: ["postpartum", "health"]
    },
    {
        id: "baby_217",
        question: "What should non-breastfeeding mothers expect regarding breast changes in the first week postpartum?",
        options: ["Gradual return to pre-pregnancy size within 7-10 days with minimal discomfort", "No milk production or engorgement since they're not planning to breastfeed", "Significant engorgement for 3-7 days as milk production naturally begins then decreases", "Mild engorgement for 2-3 days followed by immediate return to normal"],
        correct: 2,
        explanation: "All mothers experience milk production beginning 2-5 days postpartum regardless of feeding intention, as this process is hormonally driven by placenta delivery. Non-breastfeeding mothers typically experience significant breast engorgement that peaks around day 3-5 and resolves within 7-10 days as milk production decreases without stimulation. During engorgement, breasts become firm, warm, and often painful. Management includes wearing a well-fitted supportive bra, avoiding nipple stimulation, using cold compresses for comfort, and taking pain relievers as needed. Avoid hot showers on breasts or expressing milk, as this encourages continued production. Contact your healthcare provider for signs of mastitis (fever, flu-like symptoms, red streaking) or if severe pain persists beyond a week. Some mothers may have occasional milk leakage for several weeks, which is normal.",
        difficulty: "medium",
        tags: ["postpartum", "breastfeeding"]
    },
    {
        id: "baby_218",
        question: "How do nutritional needs change for mothers during the postpartum recovery period?",
        options: ["Needs return to pre-pregnancy levels once breastfeeding is established", "Breastfeeding mothers need an additional 450-500 calories daily above pre-pregnancy needs", "All postpartum mothers should continue prenatal vitamins but no other dietary changes", "Nutritional needs decrease to promote faster return to pre-pregnancy weight"],
        correct: 1,
        explanation: "Breastfeeding mothers need approximately 450-500 additional calories daily above their pre-pregnancy needs to support milk production while maintaining their own health and energy. These should be nutrient-dense calories emphasizing protein, healthy fats, calcium, and iron. Non-breastfeeding mothers still have increased needs during initial recovery for healing and replenishing nutrient stores. Key nutrients include protein for tissue repair, iron to replace blood loss, calcium for bone health, omega-3 fatty acids for brain health and mood, and adequate fluids. Continue prenatal vitamins while breastfeeding or until cleared by your provider. Focus on regular meals and snacks including lean proteins, whole grains, fruits, vegetables, and dairy. Hydration is crucial - aim for 8-10 glasses of water daily, more if breastfeeding. Avoid restrictive dieting during recovery and breastfeeding, as this can impair healing and milk supply.",
        difficulty: "medium",
        tags: ["postpartum", "breastfeeding", "health"]
    },
    {
        id: "baby_219",
        question: "When is it typically appropriate to begin structured exercise after an uncomplicated vaginal delivery?",
        options: ["Immediately postpartum with light activities like short walks", "After lochia stops, usually around 4-6 weeks postpartum", "Following medical clearance at the 6-8 week postpartum visit", "When energy levels return, typically around 8-12 weeks postpartum"],
        correct: 2,
        explanation: "Structured exercise should begin only after medical clearance at the 6-8 week postpartum visit, when healthcare providers can assess healing and address any complications. However, gentle walking can begin within days of delivery if feeling well, starting with 5-10 minutes and gradually increasing. The 6-8 week clearance ensures that bleeding has stopped, the cervix has closed, and any tears or episiotomies have healed adequately. Begin with low-impact activities and gradually progress intensity based on energy and comfort. Breastfeeding mothers should wear supportive bras and stay well-hydrated. Warning signs to stop exercise include heavy bleeding, chest pain, calf swelling, or shortness of breath. Consider specialized postpartum fitness programs that address core recovery, pelvic floor function, and the unique needs of new mothers. C-section recovery typically requires longer restrictions and modified progression based on individual healing.",
        difficulty: "medium",
        tags: ["postpartum", "health"]
    },
    {
        id: "baby_220",
        question: "How long does lochia (postpartum bleeding) typically last after vaginal delivery?",
        options: ["1-2 weeks", "2-4 weeks", "4-6 weeks", "6-8 weeks"],
        correct: 2,
        explanation: "Lochia typically lasts 4-6 weeks after vaginal delivery, progressing through three stages: lochia rubra (bright red, days 1-3), lochia serosa (pink/brown, days 4-10), and lochia alba (yellowish-white, weeks 2-6). Flow should gradually decrease over time. Heavy bleeding soaking more than one pad per hour for 2+ consecutive hours, large clots (bigger than a golf ball), or sudden return to bright red bleeding after it has lightened may indicate complications requiring immediate medical attention. C-section deliveries may have slightly shorter duration but follow similar patterns.",
        difficulty: "easy",
        tags: ["postpartum"]
    },
    {
        id: "baby_221",
        question: "What is the most recommended method for cleaning the perineal area during postpartum recovery?",
        options: ["Wiping with toilet paper", "Using a peri bottle with warm water", "Taking frequent bubble baths", "Using antibacterial wipes"],
        correct: 1,
        explanation: "A peri bottle filled with warm water is the gentlest, most effective method for cleaning the perineal area postpartum. Spray from front to back after each bathroom visit, then gently pat dry with toilet paper or a clean towel. This method avoids harsh wiping that could irritate healing tissues or introduce bacteria. Avoid bubble baths until cleared by your provider (usually 6 weeks) as they can increase infection risk. Antibacterial wipes may contain harsh chemicals that irritate sensitive healing skin. Additional comfort measures include ice packs for the first 24 hours, then warm sitz baths to promote healing and provide pain relief.",
        difficulty: "easy",
        tags: ["postpartum"]
    },
    {
        id: "baby_222",
        question: "When can most women safely resume driving after a cesarean section?",
        options: ["3-5 days postpartum", "1-2 weeks postpartum", "4-6 weeks postpartum", "Only after medical clearance at 6+ weeks"],
        correct: 1,
        explanation: "Most women can safely resume driving 1-2 weeks after cesarean delivery, provided they can comfortably perform an emergency stop without pain limiting their reaction time and are no longer taking narcotic pain medications that impair reflexes. Key factors include ability to turn and check blind spots without significant discomfort, comfortable seat belt positioning across the lap (not over the incision), and confidence in emergency maneuvers. Start with short, familiar trips during daylight hours. Some women may be ready sooner, others may need longer. Always follow your healthcare provider's specific recommendations, as individual healing varies based on complications, pain levels, and overall recovery progress.",
        difficulty: "medium",
        tags: ["postpartum"]
    },
    {
        id: "baby_223",
        question: "When can women with uncomplicated vaginal deliveries typically begin light exercise?",
        options: ["Immediately after delivery", "1-2 weeks postpartum", "6 weeks postpartum", "Only after provider clearance"],
        correct: 0,
        explanation: "Women with uncomplicated vaginal deliveries can begin light exercise (walking, gentle stretching, basic core breathing) as soon as they feel ready, often within days of delivery. Start slowly with 10-15 minute walks and gradually increase duration and intensity based on energy levels and comfort. However, avoid high-impact activities, heavy lifting over 25 pounds, and intense abdominal exercises until after your 6-week postpartum checkup. Listen to your body - increased bleeding, pain, or extreme fatigue signals you should reduce activity. C-section deliveries typically require waiting 1-2 weeks before beginning even light exercise. Always discuss your exercise plans with your healthcare provider, especially if you had complications during delivery.",
        difficulty: "medium",
        tags: ["postpartum"]
    },
    {
        id: "baby_224",
        question: "What is the most effective approach for managing breast engorgement in nursing mothers?",
        options: ["Apply heat before nursing and cold after", "Apply ice continuously throughout the day", "Massage vigorously to break up blocked ducts", "Pump exclusively instead of nursing"],
        correct: 0,
        explanation: "The most effective engorgement management combines heat before nursing (to encourage milk flow) and cold therapy afterward (to reduce swelling and pain). Apply warm compresses or take a warm shower before feeding to help milk let-down, then nurse or pump to empty the breast. After feeding, apply cold packs for 15-20 minutes to reduce inflammation. Gentle massage during nursing can help, but vigorous massage may worsen inflammation. Avoid pumping excessively as this signals your body to produce more milk, potentially worsening engorgement. If engorgement persists beyond 3-5 days or is accompanied by fever, red streaks, or severe pain, contact your healthcare provider as this may indicate mastitis.",
        difficulty: "medium",
        tags: ["postpartum", "breastfeeding"]
    },
    {
        id: "baby_225",
        question: "When does postpartum hair loss (postpartum alopecia) typically peak?",
        options: ["1-2 weeks postpartum", "1-2 months postpartum", "3-4 months postpartum", "6-8 months postpartum"],
        correct: 2,
        explanation: "Postpartum hair loss typically peaks around 3-4 months after delivery, though it can begin as early as 1-2 months postpartum. During pregnancy, elevated estrogen levels keep hair in the growth phase longer, resulting in thicker hair. After delivery, hormone levels drop rapidly, causing this 'extra' hair to enter the resting phase and shed simultaneously. This can result in losing 300-500 hairs daily (compared to normal 100-150). While alarming, this is completely normal and temporary. Hair growth typically returns to pre-pregnancy patterns by 6-12 months postpartum. Maintain a healthy diet rich in iron, protein, and vitamins to support healthy regrowth. Consult your provider if hair loss continues beyond one year or is accompanied by other symptoms.",
        difficulty: "medium",
        tags: ["postpartum"]
    },
    {
        id: "baby_226",
        question: "What is diastasis recti and when is it typically assessed postpartum?",
        options: ["Stretched abdominal skin that resolves within 2 weeks", "Separation of abdominal muscles assessed around 6-8 weeks postpartum", "Breast tissue inflammation lasting 2-3 months", "Immediate pelvic floor prolapse requiring surgery"],
        correct: 1,
        explanation: "Diastasis recti is the separation of the rectus abdominis (abdominal) muscles along the midline, affecting up to 60% of postpartum women. It's typically assessed 6-8 weeks postpartum when initial healing has occurred and swelling has reduced. To self-check: lie on your back, knees bent, lift your head slightly and feel above/below your navel for a gap wider than 2 finger-widths. While some separation is normal during pregnancy, persistent wide gaps may require physical therapy focusing on deep core strengthening rather than traditional crunches, which can worsen the condition. Most cases improve with proper exercise, though severe cases may need surgical repair. Early assessment helps guide appropriate recovery exercises.",
        difficulty: "hard",
        tags: ["postpartum"]
    },
    {
        id: "baby_227",
        question: "What is the safest first-line approach for treating postpartum constipation?",
        options: ["Over-the-counter stimulant laxatives", "Increasing dietary fiber and fluid intake", "Regular enemas until bowel movements normalize", "Daily suppository use"],
        correct: 1,
        explanation: "Increasing dietary fiber (25-35 grams daily) and fluid intake (8-10 glasses of water daily) is the safest first-line treatment for postpartum constipation. Postpartum constipation is common due to hormonal changes, iron supplements, pain medications, dehydration from breastfeeding, and fear of straining with perineal stitches. Include fiber-rich foods like fruits, vegetables, whole grains, and prunes. Gentle exercise like walking also helps. If dietary changes aren't sufficient after 2-3 days, stool softeners like docusate are safe during breastfeeding. Avoid stimulant laxatives initially as they can cause cramping and dependency. Enemas and suppositories should be used only under medical guidance, especially if you have perineal tears or hemorrhoids.",
        difficulty: "easy",
        tags: ["postpartum"]
    },
    {
        id: "baby_228",
        question: "What is the primary cause of joint pain and instability in the postpartum period?",
        options: ["Calcium loss from breastfeeding", "Continued effects of relaxin hormone", "Sleep deprivation causing inflammation", "Postpartum vitamin deficiencies"],
        correct: 1,
        explanation: "Joint pain and instability postpartum are primarily caused by relaxin hormone, which remains elevated for up to 5 months postpartum, especially during breastfeeding. Relaxin softens ligaments and joints during pregnancy to facilitate delivery, but continued elevation can cause ongoing joint laxity, particularly in the pelvis, back, and wrists. This can lead to pain, instability, and increased injury risk. Additional factors include postural changes from carrying/nursing baby, weakened core muscles, and physical demands of newborn care. Management includes gentle strengthening exercises, proper body mechanics, supportive footwear, and avoiding high-impact activities until hormone levels normalize. Most joint symptoms gradually resolve, but persistent pain should be evaluated by a healthcare provider.",
        difficulty: "medium",
        tags: ["postpartum"]
    },
    {
        id: "baby_229",
        question: "What is the key difference between postpartum depression and the 'baby blues'?",
        options: ["Duration and severity of symptoms", "Baby blues only occur after cesarean delivery", "Postpartum depression affects only first-time mothers", "Baby blues require immediate psychiatric hospitalization"],
        correct: 0,
        explanation: "The key difference is duration and severity. Baby blues affect up to 80% of new mothers, beginning 2-3 days postpartum with mild mood swings, crying spells, anxiety, and irritability that resolve within 2 weeks without treatment. Postpartum depression affects 10-15% of women, can begin anytime within the first year, and involves more severe symptoms lasting weeks to months: persistent sadness, anxiety, inability to care for baby or self, thoughts of harm, and significant functional impairment. Baby blues are managed with rest, support, and reassurance. Postpartum depression requires professional treatment including therapy and possibly medication. Both can affect any mother regardless of delivery type or previous children. Seek help immediately if symptoms worsen, persist beyond 2 weeks, or include thoughts of self-harm.",
        difficulty: "medium",
        tags: ["postpartum"]
    },
    {
        id: "baby_230",
        question: "What is the most comprehensive approach to managing postpartum hemorrhoids?",
        options: ["Hot baths three times daily", "Continuous ice pack application", "Alternating cold therapy and warm sitz baths", "Relying solely on over-the-counter numbing creams"],
        correct: 2,
        explanation: "The most effective hemorrhoid management combines cold therapy (ice packs for 10-15 minutes several times daily) to reduce swelling and pain, with warm sitz baths (10-15 minutes, 2-3 times daily) to promote healing and provide comfort. This approach addresses both acute symptoms and healing promotion. Additional measures include stool softeners to prevent straining, increasing fiber and fluid intake, avoiding prolonged sitting, and using witch hazel pads for soothing relief. Topical treatments like hydrocortisone cream may help but should be used sparingly during breastfeeding. Most postpartum hemorrhoids resolve within 6-8 weeks. Seek medical care for severe pain, excessive bleeding, or signs of infection. Prevention includes avoiding constipation and prolonged straining during bowel movements.",
        difficulty: "medium",
        tags: ["postpartum"]
    },
    {
        id: "baby_231",
        question: "When should parents transition their baby from a bassinet to a crib?",
        options: ["Immediately after birth for safety", "When baby reaches 2-3 months old regardless of size", "When baby reaches weight limit, shows rolling signs, or outgrows length", "Wait until 6 months for developmental readiness"],
        correct: 2,
        explanation: "Babies should transition from bassinet to crib when they reach the bassinet's weight limit (typically 15-20 pounds), show signs of rolling over, or exceed the length capacity—usually between 2-4 months. The transition timing depends on individual development rather than a specific age. Signs include baby pushing up during tummy time, attempting to roll, or looking cramped in the bassinet. Cribs provide more space for growing babies and remain safe through toddlerhood when used properly. Continue following safe sleep guidelines in the crib: firm mattress, fitted sheet only, no loose bedding, bumpers, or toys. The larger crib space shouldn't change sleep safety practices.",
        difficulty: "easy",
        tags: ["sleep", "safety", "dev-0-6"]
    },
    {
        id: "baby_232",
        question: "What characterizes a sleep regression and when do they typically occur?",
        options: ["Permanent worsening of sleep patterns requiring medical intervention", "Temporary sleep disruptions coinciding with developmental milestones", "Sleep problems that only occur during illness or teething", "Normal newborn sleep patterns that never improve"],
        correct: 1,
        explanation: "Sleep regressions are temporary periods when previously good sleepers suddenly experience disrupted sleep patterns, typically lasting 2-6 weeks. They commonly occur around 4 months (most significant), 8-10 months, 12 months, 18 months, and 2 years, coinciding with major developmental leaps like rolling, crawling, walking, and cognitive growth spurts. During regressions, babies may wake more frequently, resist naps, or have difficulty falling asleep due to practicing new skills or brain development changes. The 4-month regression often marks permanent changes in sleep architecture as babies develop adult-like sleep cycles. Maintain consistent routines and safe sleep practices during these phases. Most regressions resolve naturally as babies adjust to their new developmental stage.",
        difficulty: "medium",
        tags: ["sleep", "dev-0-6", "dev-6-18"]
    },
    {
        id: "baby_233",
        question: "What is the safest approach to help babies develop self-soothing skills?",
        options: ["Use motion devices like swings or rockers for overnight sleep", "Implement immediate cry-it-out method from birth", "Establish consistent routines while maintaining safe sleep environment", "Always feed or rock baby to sleep to prevent crying"],
        correct: 2,
        explanation: "Safe self-soothing development involves consistent bedtime routines while maintaining a safe sleep environment—babies should always sleep alone, on their back, in an empty crib. Effective approaches include establishing predictable bedtime routines, putting babies down awake but drowsy, and allowing brief periods of fussing while monitoring. Various gradual methods exist, from gentle check-ins to more structured approaches, allowing families to choose what fits their comfort level. Self-soothing typically develops around 3-6 months as babies mature neurologically. Never use devices like swings, rockers, or loungers for overnight sleep due to suffocation risks. Avoid sleep props that create dependencies (like feeding or rocking to sleep every time). Consistency and patience are essential as babies learn this important skill.",
        difficulty: "medium",
        tags: ["sleep", "safety", "dev-0-6"]
    },
    {
        id: "baby_234",
        question: "How much total sleep do healthy newborns (0-3 months) typically need in a 24-hour period?",
        options: ["8-10 hours total", "10-12 hours total", "14-17 hours total", "20-22 hours total"],
        correct: 2,
        explanation: "Healthy newborns typically need 14-17 hours of sleep in a 24-hour period, though individual babies may need 11-19 hours and still be normal. This sleep is distributed throughout day and night in 2-4 hour stretches, as newborns don't yet have established circadian rhythms. Sleep supports critical brain development, growth hormone release, and immune system development. Newborn sleep patterns are highly fragmented due to small stomach capacity requiring frequent feeding and immature sleep-wake cycles. By 3-4 months, babies begin consolidating sleep into longer nighttime periods and more predictable daytime naps. Parents should expect frequent night wakings initially and avoid trying to force adult-like sleep schedules. Total sleep duration gradually decreases as babies mature, but adequate sleep remains crucial for healthy development.",
        difficulty: "easy",
        tags: ["sleep", "newborn", "dev-0-6"]
    },
    {
        id: "baby_235",
        question: "When should parents seek medical evaluation for their baby's snoring?",
        options: ["Any snoring requires immediate medical attention", "Only when snoring is accompanied by breathing pauses or gasping", "Snoring is always normal in babies and needs no evaluation", "Only when snoring occurs every single night"],
        correct: 1,
        explanation: "Parents should seek medical evaluation when baby's snoring is accompanied by breathing pauses (apnea), gasping, choking sounds, or signs of breathing difficulty during sleep. While occasional light snoring from nasal congestion can be normal, persistent snoring may indicate sleep-disordered breathing or obstructive sleep apnea, which can affect growth and development. Warning signs include: breathing pauses lasting more than 10 seconds, gasping or choking during sleep, excessive daytime sleepiness, poor feeding or growth, sweating during sleep, or sleeping in unusual positions to breathe easier. Risk factors include enlarged tonsils/adenoids, nasal congestion, or certain medical conditions. Even without pauses, chronic loud snoring warrants evaluation as it may indicate partial airway obstruction. Early identification and treatment of sleep-disordered breathing is important for healthy development.",
        difficulty: "medium",
        tags: ["sleep", "health", "newborn"]
    },
    {
        id: "baby_236",
        question: "What is the recommended approach when a healthy 6+ month old baby continues waking frequently during the night?",
        options: ["Immediately respond with feeding or rocking back to sleep", "Briefly assess safety and comfort needs, then allow time for self-settling", "Never enter the room regardless of crying duration", "Introduce sleep aids or medications to ensure longer sleep"],
        correct: 1,
        explanation: "For healthy babies 6+ months old, brief assessment followed by allowing self-settling time is generally recommended, as most babies this age can sleep 6-8 hour stretches and have developed self-soothing abilities. First ensure basic needs are met: comfortable temperature, dry diaper, no signs of illness. If baby is safe and comfortable, allowing 5-15 minutes of fussing often allows natural return to sleep. This approach helps babies strengthen self-soothing skills and reduces dependence on parental intervention. However, always trust parental instincts—respond if baby seems distressed, unwell, or if crying escalates. Consider growth spurts, developmental milestones, or schedule changes that might temporarily disrupt sleep. Avoid introducing sleep aids or medications without pediatric guidance. Consistency helps babies learn new sleep patterns, but approaches should fit family values and circumstances.",
        difficulty: "medium",
        tags: ["sleep", "dev-6-18"]
    },
    {
        id: "baby_237",
        question: "How should white noise be used safely to support baby sleep?",
        options: ["Play at maximum volume directly next to the crib for best effect", "Use consistent, gentle sound at safe volume positioned away from baby", "Only use household sounds like vacuum cleaners or hair dryers", "Alternate between different sounds throughout the night"],
        correct: 1,
        explanation: "White noise should be consistent, gentle background sound played at a safe volume (no louder than 50 decibels—about as loud as a quiet conversation) and positioned at least 7 feet away from baby's sleep area to protect developing hearing. Effective white noise masks sudden environmental sounds that might startle babies awake while mimicking the consistent sounds heard in utero. Use dedicated white noise machines, apps, or fans rather than household appliances which can be too loud or irregular. Ensure all cords are safely out of reach and devices are stable and won't fall. Consistent sound throughout sleep periods works better than intermittent or changing sounds. While white noise can be helpful for sleep, it's not essential—many babies sleep well without it. Stop use if you notice any signs of hearing concerns or if baby becomes overly dependent on very loud sounds for sleep.",
        difficulty: "medium",
        tags: ["sleep", "safety"]
    },
    {
        id: "baby_238",
        question: "When do most babies naturally transition from 3 naps to 2 naps per day?",
        options: ["2-4 months old", "4-6 months old", "6-9 months old", "10-12 months old"],
        correct: 2,
        explanation: "Most babies transition from 3 naps to 2 naps between 6-9 months old, with 7-8 months being most common. Signs of readiness include: consistently fighting the third nap, taking longer to fall asleep for naps, one nap becoming very short (less than 45 minutes), or early morning wakings. The transition typically involves extending wake windows between naps and consolidating into a morning nap (around 9:30-10:30 AM) and afternoon nap (around 1:30-2:30 PM). This change occurs as babies develop longer attention spans, increased physical activity, and more mature sleep patterns. During the transition period, some days may still require a brief third nap to prevent overtiredness. Be flexible and follow baby's cues rather than forcing the change. The 2-nap schedule typically lasts until 12-18 months when most toddlers transition to one afternoon nap.",
        difficulty: "medium",
        tags: ["sleep", "dev-6-18"]
    },
    {
        id: "baby_239",
        question: "What is the safest approach when a baby will only sleep while being held?",
        options: ["Continue holding during all sleep periods since baby sleeps better", "Gradually transition to independent crib sleep using consistent, gentle methods", "Use devices like swings or bouncers that simulate being held", "Wait until baby naturally outgrows this preference without intervention"],
        correct: 1,
        explanation: "Babies who only sleep when held need gradual transition to safe independent sleep, as co-sleeping or sleeping in devices increases SIDS risk. Start with short periods: place baby in crib drowsy but awake for brief intervals, staying nearby for comfort. Gradually increase crib time as baby adjusts. Consistent bedtime routines, swaddling (if not rolling), and gentle soothing methods help ease the transition. Some babies develop this pattern from early habits or temperament, but most can learn independent sleep with patience and consistency. Never use swings, bouncers, or car seats for sleep as they pose suffocation risks. While held sleep feels natural and comforting, independent sleep in a safe crib is essential for reducing SIDS risk and establishing healthy long-term sleep habits. The transition may take several weeks but is important for both safety and family well-being.",
        difficulty: "medium",
        tags: ["sleep", "safety", "newborn"]
    },
    {
        id: "baby_240",
        question: "What is the optimal lighting environment for promoting healthy baby sleep?",
        options: ["Bright lighting to prevent night fears and anxiety", "Complete darkness for all sleep periods", "Very dim red light for nighttime care, darkness for actual sleep", "Colorful rotating night lights to provide visual stimulation"],
        correct: 2,
        explanation: "Optimal sleep lighting involves darkness during actual sleep periods with very dim, warm-colored light (red or amber) only when necessary for nighttime feeding or diaper changes. Darkness promotes melatonin production, which regulates sleep-wake cycles and helps establish healthy circadian rhythms. Bright or blue light suppresses melatonin and can make it harder for babies to return to sleep after nighttime care. Use blackout curtains or shades to create darkness for naps and nighttime sleep. When nighttime care is needed, use minimal lighting—just enough to safely complete tasks. Red light is least disruptive to sleep hormones. Avoid colorful, moving, or bright night lights that provide stimulation rather than promoting rest. During daytime naps, some natural light is acceptable and helps babies distinguish day from night. This approach supports the development of mature sleep patterns and helps the whole family get better rest.",
        difficulty: "medium",
        tags: ["sleep", "dev-0-6"]
    },
    {
        id: "baby_241",
        question: "At what age is it developmentally typical for babies to begin consolidating nighttime sleep into one stretch of 6-8 hours?",
        options: ["2-3 months", "4-6 months", "8-10 months", "12-14 months"],
        correct: 1,
        explanation: "Between 4-6 months, many infants naturally begin sleeping longer stretches at night as circadian rhythms mature and feeding needs decrease. Around this age, most can sleep 6-8 hours if they've mastered daytime feeding and a consistent bedtime routine. However, every baby is unique: some may reach this milestone earlier or later. If nighttime wakings persist past 6 months, evaluate feeding adequacy, sleep environment, and rule out medical concerns like reflux.",
        difficulty: "medium",
        tags: ["sleep"]
    },
    {
        id: "baby_242",
        question: "Which of these is the safest use of white noise in a baby's room?",
        options: ["Playing at maximum volume all night", "Position speaker inside the crib", "Using soft continuous sound at <50 dB placed across the room", "Only using intermittent 'shushing' sounds when baby cries"],
        correct: 2,
        explanation: "White noise can mask household sounds and help babies sleep—but it must be used safely. The American Academy of Pediatrics recommends continuous sound under 50 dB, with the machine 7 feet away or across the room to protect hearing. Placing speakers too close or using loud intermittent bursts can harm hearing or create dependence. Keep volume consistent and monitor noise level regularly.",
        difficulty: "medium",
        tags: ["sleep", "safety"]
    },
    {
        id: "baby_243",
        question: "What is a typical sign of a 4-month sleep regression?",
        options: ["Baby resists naps and bedtime despite previous consistency", "Baby wants to sleep 12-14 hours straight at night", "Baby only naps while being rocked", "Baby wakes up smiling and chatty"],
        correct: 0,
        explanation: "Around 4 months, many babies experience a regression linked to developmental changes and shifting sleep cycles. Parents often see increased resistance at nap and bedtime, shorter naps, and frequent night wakings—even if schedules were solid before. It's normal and usually temporary. You can support babies through consistent routines, gentle resettling methods, and extra soothing skills as they adjust.",
        difficulty: "medium",
        tags: ["sleep"]
    },
    {
        id: "baby_244",
        question: "Which bedtime routine sequence most promotes healthy sleep habits?",
        options: ["Play with toys -> feed -> lights out", "Feed -> change diaper -> bright play", "Bath -> pajamas -> story -> calm feed -> lights dim", "Lights dim -> rock -> rough play -> lights out"],
        correct: 2,
        explanation: "A predictable, calming routine cues your baby's body that sleep time is near. A bath, pajamas, quiet story, a calm feed, and dim lights form a soothing wind-down. Stimulating or bright activities just before bed can delay melatonin release and make falling asleep harder. Consistency—same order and environment—helps babies associate these cues with sleep.",
        difficulty: "easy",
        tags: ["sleep", "play"]
    },
    {
        id: "baby_245",
        question: "What is the recommended maximum duration for a back-lying nap outside the crib (e.g., stroller or swing)?",
        options: ["No more than 30 minutes", "Up to 2 hours is OK if baby fell asleep there", "Only short naps under 15 minutes", "No limit as long as supervised"],
        correct: 0,
        explanation: "While back-lying in cribs is the safest sleep position anytime, outside-crib settings (like car seats, swings, or bouncers) increase SIDS and asphyxiation risk. Experts advise limiting such naps to under 30 minutes and returning baby to a firm, flat sleep surface as soon as possible. Never leave baby to sleep unattended in these devices.",
        difficulty: "hard",
        tags: ["sleep", "safety"]
    },
    {
        id: "baby_246",
        question: "What is one effective way to help a baby learn to self-soothe at night?",
        options: ["Feed or rock every time baby stirs", "Put baby down drowsy but awake", "Let baby cry unsupervised until sleep", "Only respond after baby cries for 20 minutes"],
        correct: 1,
        explanation: "Putting baby down awake but drowsy encourages them to learn independent settling skills. They may fuss briefly but gradually learn to self-soothe. Feeding or rocking to sleep can create strong sleep-onset associations. Letting baby cry for extended unsupervised periods isn't advised. Parents can offer gentle presence—like shushing or patting—without picking up immediately to provide reassurance.",
        difficulty: "medium",
        tags: ["sleep", "play"]
    },
    {
        id: "baby_247",
        question: "What is the main hazard of co-sleeping on soft bedding or an adult mattress?",
        options: ["Too much warmth helps sleep", "Increased risk of strangulation, overlay, or suffocation", "It helps baby learn self-soothing", "Better for baby's digestion"],
        correct: 1,
        explanation: "Co-sleeping on soft surfaces like adult mattresses, couches, or with pillows and loose blankets significantly increases risks of overlay, suffocation, and SIDS. The AAP recommends room-sharing without bed-sharing: baby on a firm, flat sleep surface in the same room for at least the first 6 months. If parents choose to co-sleep, strict safety measures (no loose items, firm surface, non-smokers, no substances) are essential.",
        difficulty: "easy",
        tags: ["sleep", "safety"]
    },
    {
        id: "baby_248",
        question: "When should parents begin transitioning a baby from bassinet to crib?",
        options: ["At 1 month regardless of weight", "Once the baby reaches bassinet's weight limit or near 4-5 months", "After the baby turns 6 months", "Only when baby starts rolling over"],
        correct: 1,
        explanation: "Most bassinets have a weight limit (often 15-20 lb) and may become unstable as baby grows. Around 4-5 months or once rolling starts, it's safer to transition to a firm crib with a fitted mattress. Delaying too long increases risk of tipping or falls. If parents wait until 6 months, they may miss the optimal safe transition window.",
        difficulty: "medium",
        tags: ["sleep", "safety"]
    },
    {
        id: "baby_249",
        question: "What is a newborn's typical sleep cycle duration?",
        options: ["20-30 minutes", "45-60 minutes", "90-120 minutes", "3-4 hours"],
        correct: 0,
        explanation: "Newborns cycle through sleep approximately every 20-30 minutes, alternating between active (light) and quiet (deep) sleep. Recognizing this helps parents understand why babies often wake briefly—many resettle on their own if sleep-cue associations are healthy. Compare this to adult 90-minute cycles. Encouraging consistent routines and soothing practices helps babies link cycles and sleep longer over time.",
        difficulty: "easy",
        tags: ["sleep", "dev-0-6"]
    },
    {
        id: "baby_250",
        question: "Which environmental cue best helps support healthy circadian rhythm in babies?",
        options: ["Complete darkness all day and night", "Bright lights during playtime and dimming by bedtime", "Keeping lights the same brightness all day", "Using a nightlight 24/7 for comfort"],
        correct: 1,
        explanation: "Exposing babies to bright daytime light and reducing light in evening supports melatonin production and circadian rhythm development. Darkening the room at night but allowing gentle waking is ideal. Constant lighting or darkness disrupts natural rhythms. A dim nightlight (<=15 lux) can be useful only for brief awakenings, but not continuously.",
        difficulty: "medium",
        tags: ["sleep"]
    },
    {
        id: "baby_251",
        question: "At what age do babies typically begin to develop a circadian sleep-wake rhythm?",
        options: ["At birth", "Around 2-3 weeks", "Around 6-8 weeks", "At 6 months"],
        correct: 2,
        explanation: "Babies are born without a circadian rhythm and sleep in short cycles around the clock. Around 6-8 weeks of age, endogenous melatonin and cortisol cycles start to emerge, helping babies consolidate more sleep at night and stay awake longer during the day. Exposing your baby to natural light in the daytime and keeping nights calm and dark supports this process. Keep in mind day/night confusion is common before this age, so routines and environmental cues are powerful tools.",
        difficulty: "medium",
        tags: ["sleep"]
    },
    {
        id: "baby_252",
        question: "How long does a typical sleep cycle last for infants after 3 months of age?",
        options: ["20 minutes", "40-50 minutes", "90 minutes", "2-3 hours"],
        correct: 1,
        explanation: "After about 3 months of age, babies' sleep cycles lengthen to approximately 40-50 minutes, similar to adults' 90-minute cycles but shorter. Each cycle includes active (REM-like) and quiet (NREM) sleep. Expect your baby to pass through multiple cycles at night, sometimes waking briefly between them. Teaching settling strategies around these wake-ups helps encourage self-soothing rather than feeding or rocking every time.",
        difficulty: "hard",
        tags: ["sleep", "dev-0-6"]
    },
    {
        id: "baby_253",
        question: "What is a safest maximum volume for a white-noise machine in a baby's room?",
        options: ["70 dB (like a vacuum cleaner)", "60 dB (quiet shower)", "85 dB (city traffic)", "30 dB (rustling leaves)"],
        correct: 1,
        explanation: "The AAP recommends keeping white-noise below 50-60 dB—comparable to a quiet shower—and at least 7 feet away from the crib to protect infant hearing. Higher volumes can exceed safe occupational limits and potentially stress developing ears. Use a free decibel-meter app to test levels, and power off or lower the volume after the baby is asleep to avoid prolonged exposure.",
        difficulty: "medium",
        tags: ["sleep", "safety"]
    },
    {
        id: "baby_254",
        question: "Why might white-noise impede language acquisition if used improperly?",
        options: ["It delays nighttime feeds", "It masks daytime speech", "It teaches baby to sleep through everything", "It disrupts acoustic mapping during sleep"],
        correct: 3,
        explanation: "Some researchers warn that continuous, unvarying white-noise during the critical 4-7 month neuroplasticity window could obscure subtle language sounds—inhibiting acoustic mapping in the sleeping brain. However, when used only at sleep times and at safe levels, most experts agree the benefits of better sleep outweigh theoretical risks. Still, alternating soundscapes (like ocean waves or muted lullabies) or weaning volume over time may support optimal language development.",
        difficulty: "hard",
        tags: ["sleep", "language"]
    },
    {
        id: "baby_255",
        question: "What total sleep duration is normal for a healthy newborn (0-3 months) in a 24-hour period?",
        options: ["8-10 hours", "10-12 hours", "14-17 hours", "18-20 hours"],
        correct: 2,
        explanation: "Newborns typically sleep 14-17 hours total per 24 hours, sometimes reaching up to 18-19 hours in the first few weeks. Sleep is spread across day and night in short cycles of 30 minutes to 3 hours, due to immature circadian rhythms and small stomach capacity. Understanding that this fragmented sleep is normal supports realistic parent expectations and helps reduce pressure to “get baby sleeping through the night” too soon.",
        difficulty: "easy",
        tags: ["sleep", "newborn"]
    },
    {
        id: "baby_256",
        question: "Which bedtime routine sequence is most effective for promoting healthy infant sleep?",
        options: ["Play loudly, feed, swaddle, lights out", "Dim lights, bath, quiet cuddle, lights out", "Feed to sleep, nap, nighttime sleep", "Put baby in crib awake, sing loudly, lights on"],
        correct: 1,
        explanation: "A calming bedtime routine—like dimming lights, a warm bath, gentle cuddling, and soft music—signals winding down hormones (melatonin up, cortisol down) and helps babies connect cues to sleep. Stimulating activities or inconsistent patterns can over-excite infants and delay sleep. Consistency helps establish boundaries between day and night, and ease transitions at each sleep period.",
        difficulty: "medium",
        tags: ["sleep", "play"]
    },
    {
        id: "baby_257",
        question: "What is the recommended maximum duration for back-lying sleep outside of a crib?",
        options: ["No limit", "2 hours", "20 minutes", "30 seconds"],
        correct: 2,
        explanation: "While infants can nap outside a crib (e.g. stroller, carrier), the AAP advises limiting this to under 20 minutes before moving the baby to a firm, flat, safe sleep surface. Extended sleep in car seats or swings poses risk of airway obstruction and flat-head patterns. Watch wake-windows, transfer to a crib promptly, and supervise when baby is sleeping in non-crib settings.",
        difficulty: "hard",
        tags: ["sleep", "safety"]
    },
    {
        id: "baby_258",
        question: "When does the typical 4-month sleep regression occur, and why?",
        options: ["4 months; due to vampirism phase", "4 months; due to brain maturation and longer cycles", "2 months; because of teething", "6-7 months; separation anxiety"],
        correct: 1,
        explanation: "The 4-month sleep regression, often between 3.5-5 months, reflects brain maturation: lengthening sleep cycles, shift in sleep architecture (more NREM), and development of circadian rhythm. Infants may wake briefly and struggle to self-settle. Support includes consistent routines, responding calmly at night, and practicing settling skills. This phase typically resolves over a few weeks as neurodevelopment catches up.",
        difficulty: "medium",
        tags: ["sleep", "dev-0-6"]
    },
    {
        id: "baby_259",
        question: "Which is the safest use of white-noise machines for infants?",
        options: ["Place machine in crib", "Use max volume all night", "Keep one in each room", "Keep machine 7 ft away and under 60 dB"],
        correct: 3,
        explanation: "To safely use white-noise, keep the machine at least 7 feet from the baby’s crib and volume below 50-60 dB. Never place it inside the crib or use multiple machines, and avoid continuous high volume which can stress hearing. Gradually wean usage over time to prevent sleep-aid dependence, and only play during nap and bedtime.",
        difficulty: "easy",
        tags: ["sleep", "safety"]
    },
    {
        id: "baby_260",
        question: "Around what age do babies often begin sleeping for a 6-8-hour stretch at night?",
        options: ["1-2 months", "3-4 months", "6 months", "9-10 months"],
        correct: 2,
        explanation: "Many babies begin regularly consolidating nighttime sleep into 6-8-hour stretches around 3-4 months—as long as they weigh about 12-13 lb and are getting sufficient calories during the day. While some may get there earlier or later, establishing consistent sleep routines, day/night cues, and responsive but not overstimulating settling strategies encourages progress.",
        difficulty: "medium",
        tags: ["sleep", "dev-0-6"]
    },
    {
        id: "baby_261",
        question: "What's a sign of overtiredness that can make it harder for babies to fall asleep?",
        options: ["Yawning", "Bright eyes", "Decreased fussiness", "Crying and stiff body"],
        correct: 3,
        explanation: "Signs of overtiredness include intense crying, a stiff or arched body, and difficulty calming down—indicating cortisol overload. Yawning, rubbing eyes, and gazing away are earlier cues. Responding to early cues helps avoid overtired meltdown, making it easier for babies to fall into restorative sleep cycles rather than fight sleep, which disrupts nighttime rest.",
        difficulty: "easy",
        tags: ["sleep"]
    },
    {
        id: "baby_262",
        question: "Which technique supports babies learning to self-soothe at night?",
        options: ["Feeding in crib until asleep", "Rocking until deeply asleep", "Putting drowsy but awake in crib", "Letting baby cry 2 hours before intervening"],
        correct: 2,
        explanation: "Putting your baby in the crib when drowsy but still awake helps them learn to associate the crib with falling asleep independently. Feeding or rocking to full sleep may create sleep-onset associations that require you to recreate conditions later. Incremental change—like shortening feeding or rocking before sleep—supports skill building and reduces frequent wakings over time.",
        difficulty: "medium",
        tags: ["sleep"]
    },
    {
        id: "baby_263",
        question: "How many hours of REM sleep do newborns get daily compared to adults?",
        options: ["2-3 h vs 6 h", "4-6 h vs 1 h", "8-9 h vs ~1 h", "12-14 h vs 2-3 h"],
        correct: 2,
        explanation: "Newborns can spend up to 50% of their ~16-18 h sleep in REM (active sleep), equating to 8-9 hours daily. Adults spend only about 20% of their sleep in REM (~1 hour). High REM supports brain growth and network formation. Over time, as NREM increases, this proportion gradually shifts toward adult patterns.",
        difficulty: "hard",
        tags: ["sleep", "dev-0-6"]
    },
    {
        id: "baby_264",
        question: "Why is a consistent bedtime routine important even before newborns develop circadian rhythms?",
        options: ["For parental convenience", "To train melatonin release", "To replace feeding", "To confuse baby"],
        correct: 1,
        explanation: "Even though newborns lack circadian rhythms, a consistent bedtime routine builds behavioral cues that signal sleep time—reducing stress hormones and helping future melatonin cycles. Gentle, dim and calm activities teach babies boundaries between day and night, aiding smoother sleep transitions even before biological rhythms mature.",
        difficulty: "medium",
        tags: ["sleep","dev-0-6"]
    },
    {
        id: "baby_265",
        question: "What is the main hazard of letting a baby nap in a car seat outside the car for too long?",
        options: ["Overheating", "Airway slumping", "Spilling milk", "Sleep dependency"],
        correct: 1,
        explanation: "Car seats and swings tilt the head forward, narrowing the airway and increasing risk of breathing obstruction over time. Prolonged use outside the car can also impact neck and skull development. Limit such naps to under 20 minutes, and always move the baby to a firm, flat, safe sleep surface as soon as possible.",
        difficulty: "medium",
        tags: ["sleep", "safety"]
    },
{
		id: "baby_266",
		question: "What is the maximum safe volume level for white noise machines in a baby's sleep environment?",
		options: ["50 decibels", "60 decibels", "70 decibels", "80 decibels"],
		correct: 0,
		explanation: "White noise machines should not exceed 50 decibels when measured at baby's ear level, which is about as loud as a quiet conversation. Prolonged exposure to sounds above 50 decibels can potentially damage developing hearing and may interfere with language development by masking important sounds like parent voices. Place the machine at least 7 feet away from the crib and use the lowest effective volume. White noise should be consistent and monotonous rather than varying in pitch or volume. Consider using it only during sleep times rather than continuously to ensure babies can hear normal household sounds and conversations during wake periods.",
		difficulty: "medium",
		tags: ["sleep", "safety"]
	},
	{
		id: "baby_267",
		question: "What is the primary reason sleep sacks are recommended over loose blankets for infant sleep?",
		options: ["They provide better temperature regulation", "They prevent suffocation and SIDS risk while keeping baby warm", "They help babies sleep longer", "They prevent babies from rolling over"],
		correct: 1,
		explanation: "Sleep sacks are recommended because they provide warmth without the suffocation and SIDS risks associated with loose blankets in the crib. Unlike loose bedding, sleep sacks cannot cover a baby's face or create pockets of rebreathed air. They allow normal movement while maintaining safe sleep guidelines. Choose appropriate tog ratings for room temperature - lighter weights for warmer rooms, heavier for cooler environments. Ensure proper fit around the neck and armholes to prevent slipping. Sleep sacks can be used from newborn stage through toddlerhood, making the transition away from swaddling easier while maintaining safe sleep practices.",
		difficulty: "easy",
		tags: ["sleep", "safety"]
	},
	{
		id: "baby_268",
		question: "At what age do babies typically begin to distinguish between day and night sleep patterns?",
		options: ["2-4 weeks", "6-8 weeks", "3-4 months", "6-8 months"],
		correct: 2,
		explanation: "Babies typically begin developing circadian rhythms and distinguishing day from night around 3-4 months of age, though some may show earlier signs around 6-8 weeks. This developmental milestone occurs as their brain matures and begins producing melatonin in response to light and dark cues. Before this age, babies sleep in random patterns throughout the day and night. Parents can help encourage this development by exposing babies to bright light during daytime hours, keeping nighttime interactions quiet and dim, and establishing consistent daily routines. Once circadian rhythms develop, babies naturally consolidate more sleep during nighttime hours.",
		difficulty: "medium",
		tags: ["sleep", "dev-0-6"]
	},
	{
		id: "baby_269",
		question: "What is the recommended approach when a baby consistently wakes up 45 minutes into naps?",
		options: ["Immediately pick up and comfort the baby", "Wait 10-15 minutes to see if baby returns to sleep naturally", "End the nap and try again later", "Add more stimulation before the next nap"],
		correct: 1,
		explanation: "When babies consistently wake after 45 minutes, parents should wait 10-15 minutes to allow the baby opportunity to naturally transition back to sleep, as this often represents a normal sleep cycle completion. Many babies briefly wake between sleep cycles and can learn to connect them independently with practice. If baby remains calm or makes soft sounds, avoid immediate intervention. However, if baby becomes increasingly distressed or fully awake, it's appropriate to end the nap. This pattern often improves as babies mature and develop stronger sleep consolidation skills around 4-6 months of age.",
		difficulty: "medium",
		tags: ["sleep"]
	},
	{
		id: "baby_270",
		question: "What is the most effective way to help establish healthy sleep habits in the first 3 months?",
		options: ["Strict sleep training methods", "Consistent bedtime routines and safe sleep practices", "Keeping baby awake longer during the day", "Co-sleeping to promote bonding"],
		correct: 1,
		explanation: "In the first 3 months, establishing consistent bedtime routines and maintaining safe sleep practices are most effective for building healthy sleep foundations. Formal sleep training is not developmentally appropriate before 4 months, but routines help signal sleep time and create predictability. Simple routines might include feeding, gentle bath, quiet singing, and placing baby in crib awake but drowsy. Consistent safe sleep practices include back sleeping, firm mattress, and appropriate room temperature. Responding to baby's natural sleepy cues and allowing practice with self-soothing during brief fussy periods helps develop independent sleep skills gradually.",
		difficulty: "medium",
		tags: ["sleep", "newborn"]
	},
	{
		id: "baby_271",
		question: "What is the safest way to use a pacifier to support infant sleep?",
		options: ["Attach it to baby's clothing with a string", "Offer it at bedtime but don't replace it if it falls out during sleep", "Keep multiple pacifiers in the crib for easy access", "Only use it for daytime sleep, not nighttime"],
		correct: 1,
		explanation: "The safest pacifier use involves offering it at bedtime and naptime but not replacing it if it falls out during sleep once baby is asleep. This allows the potential SIDS-protective benefits while avoiding sleep disruption from parents repeatedly replacing lost pacifiers. Never attach pacifiers to clothing, blankets, or stuffed animals due to strangulation risk. Don't place multiple pacifiers in the crib as they become loose objects. For breastfeeding babies, wait until nursing is well-established (typically 3-4 weeks) before introducing pacifiers to avoid nipple confusion. Choose one-piece pacifiers appropriate for baby's age and replace them regularly.",
		difficulty: "medium",
		tags: ["sleep", "safety"]
	},
	{
		id: "baby_272",
		question: "What is the primary difference between night terrors and nightmares in young children?",
		options: ["Night terrors occur during REM sleep, nightmares during deep sleep", "Night terrors happen during deep sleep and child doesn't remember them", "Nightmares are more common in infants under 12 months", "Night terrors only occur in children with sleep disorders"],
		correct: 1,
		explanation: "Night terrors occur during deep non-REM sleep (usually within 2-3 hours of falling asleep) and children typically don't remember them, while nightmares happen during REM sleep and are often remembered. During night terrors, children may scream, thrash, or appear terrified while still asleep and are difficult to comfort or fully awaken. They're most common between ages 3-8 years and often run in families. Parents should ensure safety during episodes but avoid trying to wake the child. Night terrors are usually outgrown and don't indicate psychological problems. Nightmares are more common, occur later in sleep, and children can usually be comforted and consoled afterward.",
		difficulty: "hard",
		tags: ["sleep", "toddler"]
	},
	{
		id: "baby_273",
		question: "What is the recommended duration for a bedtime routine for infants and toddlers?",
		options: ["5-10 minutes", "20-30 minutes", "45-60 minutes", "Variable based on child's needs"],
		correct: 1,
		explanation: "An effective bedtime routine should last 20-30 minutes and be predictable and calming. This duration is long enough to signal sleep time and help children transition from active play to rest, but short enough to be sustainable for families and prevent overtiredness. A typical routine might include bath, diaper change, pajamas, feeding, quiet story or song, and placing child in bed awake. The routine should be consistent in sequence and timing each night. Shorter routines may not provide adequate wind-down time, while longer routines can become overstimulating or delay sleep onset. Adjust activities based on age but maintain the same approximate duration.",
		difficulty: "easy",
		tags: ["sleep", "toddler"]
	},
	{
		id: "baby_274",
		question: "What is the most common cause of early morning wakings (before 6 AM) in babies over 6 months?",
		options: ["Hunger from inadequate daytime nutrition", "Room being too bright from early sunrise", "Bedtime being too late the previous night", "Natural biological rhythm that will resolve on its own"],
		correct: 1,
		explanation: "Early morning wakings in babies over 6 months are most commonly caused by environmental factors, particularly rooms becoming too bright from early sunrise, which signals the brain to stop producing melatonin and begin the wake cycle. Room-darkening curtains or blackout shades often resolve this issue effectively. Other environmental factors include noise, temperature changes, or neighbors' activities. While some babies are naturally early risers, persistent wake times before 6 AM usually indicate external influences disrupting the natural sleep cycle. Bedtime timing, overtiredness, and undertiredness can also contribute, but light exposure remains the primary factor in most cases.",
		difficulty: "medium",
		tags: ["sleep", "dev-6-18"]
	},
	{
		id: "baby_275",
		question: "What is the recommended response when a baby wakes frequently during the night after previously sleeping well?",
		options: ["Immediately implement formal sleep training", "Assess for illness, growth spurts, or developmental changes", "Increase daytime calories to prevent hunger", "Move baby to parents' room temporarily"],
		correct: 1,
		explanation: "When previously good sleepers begin waking frequently, parents should first assess for underlying causes including illness (even mild colds can disrupt sleep), growth spurts increasing hunger, developmental milestones like rolling or crawling, schedule changes, or environmental factors. Check for fever, congestion, or other illness signs. Consider recent changes in routine, caregiver, or environment. Growth spurts may temporarily increase night feeding needs. New motor skills often cause temporary sleep disruption as babies practice them. Address identified causes first before considering sleep training modifications. Most temporary sleep disruptions resolve naturally within 1-2 weeks once the underlying cause is addressed.",
		difficulty: "medium",
		tags: ["sleep", "health"]
	},
    {
		id: "baby_276",
		question: "What is the ideal room temperature range for safe infant sleep?",
		options: ["65-70°F (18-21°C)", "72-75°F (22-24°C)", "76-78°F (24-26°C)", "60-65°F (16-18°C)"],
		correct: 0,
		explanation: "The ideal room temperature for safe infant sleep is 65-70°F (18-21°C). This range prevents overheating, which is a known SIDS risk factor, while ensuring baby stays comfortable. Parents should dress babies in light sleep clothing - typically one more layer than an adult would wear. Check for overheating by feeling baby's chest or back of neck; these areas should feel warm but not hot or sweaty. Signs of overheating include flushed cheeks, rapid breathing, or damp hair. The room should feel slightly cool to adults, and using a fan for air circulation is safe and beneficial.",
		difficulty: "easy",
		tags: ["sleep", "safety"]
	},
	{
		id: "baby_277",
		question: "Which sleep surface meets current safe sleep guidelines for infants?",
		options: ["Soft mattress with bumper pads for extra safety", "Firm mattress with fitted sheet only", "Memory foam mattress with mesh bumpers", "Firm mattress with small pillow for head support"],
		correct: 1,
		explanation: "Safe infant sleep requires a firm mattress with only a fitted sheet - nothing else in the crib. The mattress should be firm enough that it doesn't indent when baby lies on it and should fit snugly in the crib with no gaps. Bumper pads, pillows, blankets, and stuffed animals all increase SIDS and suffocation risks and should never be used. If parents worry about baby being cold, dress baby in appropriate sleep clothing or use a wearable blanket (sleep sack) rather than loose bedding. The 'bare is best' rule keeps babies safest during sleep.",
		difficulty: "easy",
		tags: ["sleep", "safety"]
	},
	{
		id: "baby_278",
		question: "When is it safe to allow babies to remain in positions other than on their back during sleep?",
		options: ["When they can consistently roll both ways on their own", "At 6 months of age regardless of development", "When they weigh more than 15 pounds", "Never - always return baby to back position"],
		correct: 0,
		explanation: "Babies should always be placed on their backs to sleep initially, but once they can consistently roll both ways (back to stomach AND stomach to back) independently, it's safe to leave them in whatever position they naturally move to during sleep. This milestone typically occurs around 4-6 months but varies by individual development. The critical requirement is mastery of rolling in both directions - babies must be able to reposition themselves if their airway becomes compromised. Until this skill is fully developed, parents should gently return babies to their back position if found sleeping on their side or stomach.",
		difficulty: "medium",
		tags: ["sleep", "safety", "dev-0-6"]
	},
	{
		id: "baby_279",
		question: "What primarily causes the common sleep regression around 4 months of age?",
		options: ["Increased appetite from growth spurts", "Early teething discomfort", "Maturation of sleep cycles and brain development", "Separation anxiety beginning to develop"],
		correct: 2,
		explanation: "The 4-month sleep regression occurs because babies' sleep cycles mature from simple newborn patterns to more complex, adult-like sleep architecture with distinct stages. This neurological development makes babies more likely to briefly wake between sleep cycles, requiring new skills to link cycles together and return to sleep independently. Unlike temporary regressions, this represents permanent brain maturation. Babies may also be developing new motor skills like rolling, which can further disrupt sleep. Parents can help by maintaining consistent routines, allowing practice with self-soothing, and understanding this is a normal developmental milestone requiring patience and consistency.",
		difficulty: "medium",
		tags: ["sleep", "dev-0-6"]
	},
	{
		id: "baby_280",
		question: "When do most pediatric sleep experts recommend it's appropriate to begin formal sleep training methods?",
		options: ["2-3 months old when patterns emerge", "4-6 months old when sleep cycles mature", "8-10 months old when separation anxiety decreases", "After 12 months when night feeding stops"],
		correct: 1,
		explanation: "Most pediatric sleep experts recommend waiting until 4-6 months of age before beginning formal sleep training approaches. By this age, babies typically have more mature sleep cycles, can sleep for longer stretches without feeding, and have developed better self-regulation abilities. Their circadian rhythms are more established, making consistent sleep patterns more achievable. Before 4 months, frequent night wakings often serve legitimate developmental and nutritional needs. However, healthy sleep foundations can be built from birth through consistent routines, safe sleep practices, and gradually encouraging self-soothing during age-appropriate wake windows.",
		difficulty: "medium",
		tags: ["sleep", "dev-0-6"]
	},
	{
		id: "baby_281",
		question: "Which sleep association is most likely to create dependency requiring frequent parent intervention at night?",
		options: ["Consistent white noise", "Being fed or rocked to sleep", "Same bedtime routine nightly", "Cool, dark room environment"],
		correct: 1,
		explanation: "Being fed or rocked to sleep creates problematic sleep associations because babies learn to depend on parent intervention to fall asleep. When babies naturally wake between sleep cycles (which all humans do), they expect the same conditions that helped them fall asleep initially. This leads to frequent night wakings requiring feeding or rocking to return to sleep. Environmental supports like white noise, darkness, and consistent routines promote sleep without creating dependency. Gradually helping babies learn to fall asleep independently while still providing comfort and security leads to better sleep for the whole family.",
		difficulty: "medium",
		tags: ["sleep"]
	},
	{
		id: "baby_282",
		question: "At what age can most healthy, full-term babies nutritionally sleep through the night without feeding?",
		options: ["2-3 months and 10+ pounds", "4-6 months and 12-15 pounds", "8-10 months regardless of weight", "Only after 12 months of age"],
		correct: 1,
		explanation: "Most healthy, full-term babies can nutritionally sleep through the night without feeding by 4-6 months of age when they typically weigh 12-15 pounds and can consume sufficient calories during daytime hours. However, individual needs vary significantly based on growth patterns, feeding method, and development. Breastfed babies may need nighttime nursing longer than formula-fed babies due to breast milk's faster digestion. Some babies may still wake from hunger beyond 6 months, while others may be ready earlier. Parents should consult their pediatrician about their specific baby's nutritional needs rather than following rigid timelines.",
		difficulty: "medium",
		tags: ["sleep", "breastfeeding", "bottle-feeding"]
	},
    	{
		id: "baby_283",
		question: "What should parents do when their 3-month-old baby will only sleep when being held or rocked?",
		options: ["Continue holding - babies this young need constant comfort", "Start putting baby down awake but drowsy and provide gentle reassurance", "Let baby cry it out to learn independence", "Use a vibrating bassinet as a substitute for holding"],
		correct: 1,
		explanation: "At 3 months, babies can begin learning to fall asleep independently by being put down awake but drowsy, with gentle reassurance like soft shushing or light patting. This gradual approach helps babies develop self-soothing skills without distress. Avoid creating sleep associations that require constant parent intervention, as this can lead to frequent night wakings. While some fussing is normal as babies learn new skills, harsh cry-it-out methods aren't recommended for babies under 4-6 months. Vibrating devices may create another dependency and don't teach genuine self-soothing skills.",
		difficulty: "medium",
		tags: ["sleep", "newborn"]
	},
	{
		id: "baby_284",
		question: "When should parents stop swaddling their baby?",
		options: ["At exactly 8 weeks of age", "When baby shows any signs of attempting to roll over", "When baby reaches 12 pounds in weight", "When baby consistently breaks out of the swaddle"],
		correct: 1,
		explanation: "Parents should stop swaddling immediately when their baby shows any signs of attempting to roll over, typically between 2-4 months of age. Once a baby can roll or is trying to roll, swaddling becomes dangerous because it restricts arm movement needed for repositioning if they roll to their stomach during sleep. Watch for signs like rocking side to side, lifting head higher during tummy time, or rolling from tummy to back. Transition gradually using products like sleep sacks with arms free, or swaddle one arm out at a time. The timing varies by individual development, not age or weight alone.",
		difficulty: "easy",
		tags: ["sleep", "safety"]
	},
	{
		id: "baby_285", 
		question: "What is the safest maximum volume level for white noise machines in a baby's sleep environment?",
		options: ["65 decibels", "50 decibels", "85 decibels", "Any volume that masks household sounds"],
		correct: 1,
		explanation: "White noise should not exceed 50 decibels when measured at the baby's ear level, roughly equivalent to a quiet conversation or rainfall. Volumes above this level can potentially damage developing hearing and may interfere with speech development by masking important language sounds. Place the white noise machine at least 7 feet from the baby's sleep area, and use the lowest effective volume. Consistent, gentle white noise can help babies sleep by masking sudden environmental sounds, but it should never be so loud that you need to raise your voice to be heard over it when standing next to the crib.",
		difficulty: "medium", 
		tags: ["sleep", "safety"]
	},
	{
		id: "baby_286",
		question: "At what age do most babies naturally consolidate nighttime sleep into longer stretches of 5-6 hours?",
		options: ["6-8 weeks", "3-4 months", "6-7 months", "9-12 months"],
		correct: 1,
		explanation: "Most babies begin sleeping for longer stretches of 5-6 hours at night between 3-4 months of age, coinciding with neurological maturation and circadian rhythm development. This timing varies widely among individual babies, with some achieving longer sleep stretches earlier and others taking longer. Factors influencing this development include feeding method, birth weight, overall health, and individual temperament. Parents should maintain realistic expectations, as 'sleeping through the night' for babies often means 5-6 hour stretches rather than adult-length sleep periods. Premature babies may reach this milestone later when adjusted for their corrected age.",
		difficulty: "easy",
		tags: ["sleep", "dev-0-6"]
	},
	{
		id: "baby_287",
		question: "Which sleep environment factor most effectively supports healthy circadian rhythm development in babies?",
		options: ["Keeping the room completely dark at all times", "Exposing baby to bright light during daytime feeds and dim light at night", "Using blue light therapy devices", "Maintaining the same lighting throughout day and night"],
		correct: 1,
		explanation: "Exposing babies to bright natural light during daytime activities and keeping nighttime interactions dim helps establish healthy circadian rhythms. This light exposure signals day versus night to the developing biological clock, typically maturing around 3-4 months. During day feeds and play, open curtains and use normal room lighting. For nighttime feeds and diaper changes, use soft, dim lighting to avoid stimulating wakefulness. Avoid screens and bright artificial lights in the evening hours. This natural light pattern helps babies distinguish between day and night, promoting longer nighttime sleep stretches and more predictable daytime alertness as their circadian system develops.",
		difficulty: "medium",
		tags: ["sleep", "dev-0-6"]
	},
	{
		id: "baby_288",
		question: "What is the recommended approach when a 9-month-old baby suddenly starts waking frequently at night after previously sleeping well?",
		options: ["Immediately start sleep training to break the habit", "Assess for developmental milestones, illness, or environmental changes", "Increase daytime feeding to prevent hunger", "Move baby to their own room"],
		correct: 1,
		explanation: "When a previously good sleeper suddenly starts waking frequently, first assess for underlying causes before implementing sleep interventions. Common reasons include developmental leaps (crawling, pulling to stand), teething discomfort, illness, schedule changes, or environmental factors like temperature or noise. Around 8-10 months, babies often experience sleep regression related to separation anxiety and new motor skills. Check for signs of illness, ensure comfort needs are met, and maintain consistent routines while being patient with temporary disruptions. If sleep issues persist beyond 2-3 weeks without apparent cause, then consider gentle sleep coaching approaches appropriate for this age.",
		difficulty: "medium",
		tags: ["sleep", "dev-6-18"]
	},
	{
		id: "baby_289",
		question: "What is the most important safety consideration when using a sleep positioner or wedge product for infant sleep?",
		options: ["Ensure it's made from breathable materials", "Use only under direct supervision", "These products are not recommended for safe infant sleep", "Position it correctly to prevent rolling"],
		correct: 2,
		explanation: "Sleep positioners, wedges, and similar products are not recommended by the American Academy of Pediatrics for infant sleep due to suffocation and SIDS risks. These products can restrict breathing, cause carbon dioxide rebreathing, or create gaps where babies can become trapped. Despite marketing claims about preventing rolling or reducing reflux, there's no scientific evidence these products provide benefits, and several have been associated with infant deaths. The safest sleep environment remains a firm, flat mattress with a fitted sheet in an otherwise bare crib. For babies with medical conditions requiring specialized positioning, parents should use only devices prescribed and monitored by their pediatrician.",
		difficulty: "medium",
		tags: ["sleep", "safety"]
	},
	{
		id: "baby_290",
		question: "How should parents respond when their 6-month-old baby consistently takes very short naps (30-45 minutes)?",
		options: ["Wake baby earlier in the morning to increase tiredness", "Extend wake windows between naps and ensure adequate stimulation", "Put baby down for naps while completely awake", "Accept that some babies are naturally short nappers"],
		correct: 1,
		explanation: "Short naps in 6-month-olds often indicate undertiredness rather than overtiredness. Try extending wake windows by 15-30 minutes and ensuring adequate physical and mental stimulation between naps, such as tummy time, sensory play, and social interaction. A 6-month-old typically needs 2.5-3 hours of awake time between naps. Also ensure baby isn't falling asleep too drowsy - put them down awake but calm so they can connect sleep cycles independently. Environmental factors like room temperature, lighting, and noise levels should be optimized. While some babies are naturally shorter nappers, most can achieve 1-2 hour naps with appropriate schedule adjustments and self-soothing skills.",
		difficulty: "medium",
		tags: ["sleep", "dev-6-18"]
	},
	{
		id: "baby_291",
		question: "What is the primary concern with allowing babies to sleep in car seats outside the vehicle?",
		options: ["It creates bad sleep habits", "The reclined position can cause breathing difficulties", "It prevents deep sleep cycles", "It may cause overheating"],
		correct: 1,
		explanation: "The semi-upright position of car seats can cause breathing difficulties when used outside the vehicle for extended sleep periods. This position may lead to airway obstruction, especially in young infants whose airways are still developing and who have less muscle control. Car seats are designed for vehicle safety, not extended sleep, and lack the firm, flat surface recommended for safe sleep. The American Academy of Pediatrics recommends limiting car seat use to travel only, transferring sleeping babies to a safe sleep surface when possible. If baby falls asleep during car travel, continue driving safely to your destination, then move baby to a crib or bassinet for continued sleep.",
		difficulty: "easy",
		tags: ["sleep", "safety"]
	},
	{
		id: "baby_292",
		question: "At what age can parents safely introduce a small comfort object (like a lovey) in the crib?",
		options: ["Birth to 3 months", "4-6 months", "12 months", "18 months"],
		correct: 2,
		explanation: "Small comfort objects can be safely introduced around 12 months of age when babies have developed sufficient motor skills and coordination to move objects away from their face if needed. Before 12 months, any object in the crib poses suffocation risks and violates safe sleep guidelines. Choose comfort objects that are small (smaller than baby's fist), without loose parts, ribbons, or buttons that could pose choking hazards. A small square of soft fabric or a small stuffed animal specifically designed for infant use are good options. Even after 12 months, ensure the comfort object doesn't have any detachable parts and regularly inspect it for wear and safety.",
		difficulty: "easy",
		tags: ["sleep", "safety", "toddler"]
	},
    	{
		id: "baby_293",
		question: "What type of toys are most developmentally appropriate for newborns (0-2 months)?",
		options: ["Brightly colored rattles with multiple sounds", "High-contrast black and white patterns or toys", "Soft musical toys that play lullabies", "Textured toys for grasping practice"],
		correct: 1,
		explanation: "High-contrast black and white toys are most appropriate for newborns because their vision is still developing and they can only see clearly about 8-12 inches away. Their visual system can better distinguish stark black and white contrasts than colors or complex patterns, supporting crucial early visual development and eye muscle strengthening. Brightly colored or musical toys can overstimulate newborns, while textured grasping toys aren't developmentally appropriate until babies develop intentional reaching around 3-4 months. Simple, high-contrast visual stimulation placed at the right distance helps newborns practice focusing and tracking, laying the foundation for later visual skills.",
		difficulty: "easy",
		tags: ["play", "newborn", "dev-0-6"]
	},
	{
		id: "baby_294",
		question: "When do babies typically develop the ability to intentionally reach for and grasp toys?",
		options: ["1-2 months", "3-4 months", "5-6 months", "7-8 months"],
		correct: 1,
		explanation: "Babies typically develop intentional reaching and grasping around 3-4 months as their hand-eye coordination improves and the primitive grasp reflex begins to fade, allowing for more purposeful movements. Before this age, any grasping is primarily reflexive rather than intentional. This milestone coincides with improved head control and visual tracking abilities. The development progresses from batting at objects to reaching with both hands, then to more precise single-handed reaches. Some babies may show early signs at 2-3 months or not fully develop this skill until 5-6 months, which is still within normal developmental range. This ability opens up new learning opportunities through exploration and manipulation of objects.",
		difficulty: "medium",
		tags: ["play", "dev-0-6"]
	},
	{
		id: "baby_295",
		question: "What is the primary developmental benefit of peek-a-boo games for babies aged 4-8 months?",
		options: ["Teaching first words and language patterns", "Developing the concept of object permanence", "Improving fine motor coordination", "Building trust through social interaction"],
		correct: 1,
		explanation: "Peek-a-boo primarily helps babies develop object permanence - the understanding that objects and people continue to exist even when they can't be seen. This crucial cognitive milestone typically emerges around 4-6 months and is fully developed by 8-12 months. While peek-a-boo does support language development through repetition and turn-taking, and certainly builds social bonds, its primary developmental value lies in teaching babies that when someone disappears behind their hands, they haven't actually vanished. This understanding is foundational for later cognitive development, including memory formation and problem-solving skills. The game also helps babies learn to anticipate events and understand cause-and-effect relationships in a fun, engaging way.",
		difficulty: "medium",
		tags: ["play", "dev-0-6", "dev-6-18"]
	},
	{
		id: "baby_296",
		question: "What size objects are safest for babies 6-12 months who are exploring through mouthing?",
		options: ["Smaller than a ping-pong ball for easy handling", "Larger than a toilet paper tube (1.75 inches diameter)", "Between the size of a marble and golf ball", "Any size as long as they're soft materials"],
		correct: 1,
		explanation: "Objects should be larger than a toilet paper tube (1.75 inches in diameter) to prevent choking hazards. This is the standard safety test used by pediatric safety experts. Babies aged 6-12 months naturally explore objects by mouthing them, which is important for sensory development and learning about texture, temperature, and shape. However, their airways are small, making them vulnerable to choking on objects that can fit through a toilet paper tube. Even soft objects can pose choking risks if they're too small or can compress. Always supervise play and regularly inspect toys for small parts that might break off. The toilet paper tube test is a simple way parents can quickly assess whether a toy or object is an appropriate size for their exploring baby.",
		difficulty: "easy",
		tags: ["play", "safety", "dev-6-18"]
	},
	{
		id: "baby_297",
		question: "When do babies typically show genuine interest in cause-and-effect toys like pressing buttons to make sounds or lights appear?",
		options: ["2-3 months", "4-5 months", "6-9 months", "10-12 months"],
		correct: 2,
		explanation: "Babies typically begin showing genuine interest in cause-and-effect toys around 6-9 months when they develop the cognitive ability to understand that their actions can produce predictable results. This coincides with improved fine motor skills needed to press buttons and manipulate switches, as well as better hand-eye coordination. Before this age, any activation of such toys is usually accidental rather than intentional. During this period, babies delight in discovering they have the power to make things happen, which builds confidence and problem-solving skills. Popular cause-and-effect toys include activity boards, pop-up toys, and musical instruments. This developmental milestone also supports learning about sequence, prediction, and control over their environment, laying groundwork for more complex cognitive skills.",
		difficulty: "medium",
		tags: ["play", "dev-6-18"]
	},
	{
		id: "baby_298",
		question: "What is the most critical safety consideration when selecting toys for newly mobile babies (8-12 months)?",
		options: ["Ensuring toys are made from washable, non-toxic materials", "Ensuring all parts are larger than choking hazards (1.75 inches)", "Choosing toys with rounded edges to prevent cuts and bruises", "Selecting toys that promote educational development"],
		correct: 1,
		explanation: "The most critical safety consideration is ensuring all toy parts are larger than choking hazards (1.75 inches in diameter). Mobile babies have increased access to small objects throughout the house and will explore everything by mouthing. Their improved crawling and pulling-to-stand abilities mean they can reach items previously out of bounds, including small parts that may have fallen from older children's toys, coins, or household items. While washable materials, rounded edges, and educational value are all important considerations, preventing choking takes absolute priority. Parents should regularly scan floor areas at baby's eye level, secure small objects, and use the toilet paper tube test for any questionable items. This increased mobility phase requires heightened vigilance about environmental safety beyond just toy selection.",
		difficulty: "easy",
		tags: ["play", "safety", "dev-6-18"]
	},
	{
		id: "baby_299",
		question: "What is the recommended duration for supervised tummy time sessions for a 3-month-old baby?",
		options: ["30 seconds to 1 minute at a time", "3-5 minutes several times throughout the day", "10-15 minutes twice daily", "20-30 minutes in one session"],
		correct: 1,
		explanation: "Three-month-old babies should have tummy time sessions of 3-5 minutes several times throughout the day, building up their neck, shoulder, and core strength gradually. At this age, babies have developed better head control than newborns but still fatigue quickly. Multiple short sessions are more effective and less frustrating than longer sessions. Start with shorter periods if baby resists, and gradually increase duration as strength improves. Watch for signs of fatigue like fussing or head dropping, which indicate it's time for a break. Tummy time can be made more engaging with colorful toys, mirrors, or parent interaction at baby's eye level. This regular practice is crucial for preventing flat head syndrome, strengthening muscles needed for rolling and crawling, and promoting healthy motor development.",
		difficulty: "easy",
		tags: ["play", "dev-0-6", "health"]
	},
	{
		id: "baby_300",
		question: "Which play activity most effectively supports language development in babies aged 6-12 months?",
		options: ["Playing classical music during quiet time", "Interactive reading of board books together", "Providing quiet independent exploration time", "Watching educational baby videos"],
		correct: 1,
		explanation: "Interactive reading of board books together most effectively supports language development because it provides rich, back-and-forth communication opportunities. During shared reading, parents naturally use varied vocabulary, repeat words, ask questions, and respond to baby's vocalizations, all crucial for language acquisition. The interactive nature helps babies learn turn-taking in conversation, while colorful pictures provide visual context for words. Board books are perfect for this age because they're safe for mouthing and manipulation. While music can support rhythm and pattern recognition, and independent exploration develops other skills, neither provides the rich language interaction of shared reading. Educational videos lack the responsive interaction necessary for optimal language development and aren't recommended for babies under 18 months except for video chatting with family.",
		difficulty: "medium",
		tags: ["play", "language", "dev-6-18"]
	},
	{
		id: "baby_301",
		question: "When do babies typically begin to show clear preferences for certain toys over others?",
		options: ["2-3 months", "4-6 months", "7-9 months", "10-12 months"],
		correct: 1,
		explanation: "Babies typically begin showing clear toy preferences around 4-6 months as their memory, recognition abilities, and personality traits develop. This milestone indicates significant cognitive growth - babies can now remember previous experiences with toys and anticipate the pleasure or interest certain objects provide. They may consistently reach for specific rattles, smile at particular toys, or show distress when a favored item is removed. These preferences often reflect developmental needs; babies might prefer toys that match their current motor skills or sensory interests. Before 4 months, interactions with toys are largely reflexive rather than preferential. Understanding these preferences helps parents select engaging toys and can provide insight into their baby's developing personality, sensory preferences, and cognitive abilities. Preferences also support emotional development as babies form attachments to comfort objects.",
		difficulty: "medium",
		tags: ["play", "dev-0-6"]
	},
	{
		id: "baby_302",
		question: "What is the primary developmental benefit of providing babies with toys featuring different textures?",
		options: ["Strengthening grip and fine motor control", "Developing sensory processing and brain connections", "Teaching visual discrimination between objects", "Building bilateral coordination skills"],
		correct: 1,
		explanation: "Providing babies with varied textures primarily supports sensory processing development and brain connection formation. When babies explore different textures - smooth, rough, bumpy, soft, or ridged - they're building neural pathways that help them interpret and respond to sensory information throughout life. This tactile exploration is crucial for sensory integration, helping babies learn to organize and make sense of information from their environment. While texture exploration does support fine motor development and can aid visual learning, the primary benefit is sensory system development. Age-appropriate textured toys might include soft fabric books, bumpy teething rings, or toys with varied surface materials. This sensory foundation supports later skills like handwriting, body awareness, and the ability to focus in different environments by filtering relevant sensory information.",
		difficulty: "medium",
		tags: ["play", "dev-0-6", "dev-6-18"]
	},
    {
		id: "baby_303",
		question: "What is the most appropriate first toy to introduce to a 1-month-old baby?",
		options: ["Soft stuffed animal with button eyes", "High-contrast black and white cards or mobile", "Colorful stacking rings", "Musical toy with flashing lights"],
		correct: 1,
		explanation: "High-contrast black and white patterns are ideal for 1-month-old babies because their vision is still developing and they can only see objects clearly at 8-12 inches away. At this age, babies can best distinguish high-contrast patterns, particularly black and white designs, which help stimulate visual development and focus. These simple geometric patterns, faces, or stripes provide optimal visual stimulation without overwhelming their immature nervous system. Position these toys 8-12 inches from baby's face during supervised play. Avoid toys with small parts like button eyes (choking hazard), complex colorful toys, or overstimulating musical toys that exceed their developmental capacity.",
		difficulty: "easy",
		tags: ["play", "newborn", "dev-0-6"]
	},
	{
		id: "baby_304",
		question: "At what age do babies typically begin transferring objects from one hand to the other?",
		options: ["2-3 months", "4-5 months", "6-7 months", "8-9 months"],
		correct: 2,
		explanation: "Babies typically begin transferring objects from one hand to the other around 6-7 months of age. This milestone represents significant neurological development requiring bilateral coordination, midline crossing, and improved hand-eye coordination. Before 6 months, babies may grasp objects but lack the coordination to deliberately pass them between hands. This skill foundations later abilities like self-feeding, clapping, and using both hands together for complex tasks. To encourage development, offer appropriately-sized toys like soft blocks, rings, or rattles that are easy to grasp and safe to mouth. Babies will often bang, shake, and examine toys more thoroughly once they master this transfer skill.",
		difficulty: "medium",
		tags: ["play", "dev-0-6", "dev-6-18"]
	},
	{
		id: "baby_305",
		question: "What is the primary benefit of mirror play for babies in their first year?",
		options: ["Teaching them to recognize themselves", "Developing visual tracking skills", "Promoting social-emotional development", "Improving fine motor coordination"],
		correct: 2,
		explanation: "Mirror play primarily supports social-emotional development in babies during their first year. Babies are naturally drawn to faces in mirrors and will smile, coo, babble, and make expressions at their reflection, which develops social interaction skills and emotional expression. This face-to-face engagement, even with themselves, builds foundation for later social skills. True self-recognition doesn't develop until 15-24 months - before then, babies see another interesting baby in the mirror. While mirrors do support visual development, the primary benefit is encouraging social behaviors, facial expressions, and vocalizations. Always use unbreakable mirrors and supervise mirror play for safety.",
		difficulty: "medium",
		tags: ["play", "dev-0-6", "dev-6-18"]
	},
	{
		id: "baby_306",
		question: "When should parents introduce books to their baby's play routine?",
		options: ["After 6 months when they can sit up", "Around 12 months when they understand words", "From birth as part of daily interaction", "When they stop trying to eat everything"],
		correct: 2,
		explanation: "Parents should introduce books from birth as part of daily interaction with their baby. Early book exposure supports crucial language development through rhythm, tone, and vocabulary, even before babies understand words. Reading aloud provides auditory stimulation, promotes bonding, and establishes positive associations with books and reading. Choose sturdy board books or soft cloth books that babies can safely mouth and explore independently. The interaction and language exposure matter more than comprehension. This early foundation creates neural pathways for literacy skills and establishes reading as an enjoyable daily routine that supports both cognitive and emotional development.",
		difficulty: "easy",
		tags: ["play", "language", "newborn", "dev-0-6"]
	},
	{
		id: "baby_307",
		question: "What type of play activity best supports gross motor development in 8-10 month old babies?",
		options: ["Stacking blocks while sitting", "Crawling through tunnels or around obstacles", "Playing with small sorting toys", "Finger painting activities"],
		correct: 1,
		explanation: "Crawling through tunnels or around obstacles best supports gross motor development in 8-10 month old babies. At this age, babies are typically mobile crawlers, and navigating obstacles encourages large muscle movement, bilateral coordination, and spatial awareness. This activity strengthens core muscles, improves balance, and develops motor planning skills essential for future walking. Create safe obstacle courses using cushions, play tunnels, or sturdy furniture to crawl around under supervision. Other options primarily develop fine motor skills: block stacking uses small hand muscles, sorting toys require precise finger movements, and finger painting isn't developmentally appropriate or safe at this age.",
		difficulty: "medium",
		tags: ["play", "dev-6-18", "safety"]
	},
	{
		id: "baby_308",
		question: "At what age do babies typically show interest in simple cause-and-effect toys like pressing buttons to activate sounds or lights?",
		options: ["2-4 months", "5-7 months", "8-10 months", "11-15 months"],
		correct: 2,
		explanation: "Babies typically show genuine interest in simple cause-and-effect toys around 8-10 months of age. At this stage, they begin understanding that their actions create predictable results - a crucial cognitive milestone. Before 8 months, babies may accidentally activate toys but don't grasp the connection between action and result. Around 8-10 months, they'll deliberately and repeatedly press buttons, shake rattles, or bang objects to recreate interesting effects. This cause-and-effect understanding foundations problem-solving skills and logical thinking. Choose toys with large, easy-to-activate buttons and engaging but not overstimulating sounds or lights. Supervise play and ensure all parts are too large to swallow.",
		difficulty: "medium",
		tags: ["play", "dev-6-18", "safety"]
	},
	{
		id: "baby_309",
		question: "What is the most important safety consideration when choosing toys for a newly mobile 9-month-old baby?",
		options: ["Avoiding toys with batteries", "Ensuring all parts pass the toilet paper tube test", "Selecting only educational toys", "Choosing washable materials only"],
		correct: 1,
		explanation: "The most critical safety consideration for newly mobile 9-month-old babies is ensuring all toy parts pass the toilet paper tube test - if any part fits through a standard toilet paper tube, it poses a choking hazard. At 9 months, babies extensively mouth objects and can now crawl to access toys throughout the house, not just those directly given to them. This mobility dramatically increases choking risk exposure. The toilet paper tube test provides a practical, reliable way to assess size safety at home. While battery-free and washable toys offer benefits, and educational value matters, preventing choking hazards is the absolute top priority for this highly oral, newly mobile developmental stage.",
		difficulty: "easy",
		tags: ["play", "safety", "dev-6-18"]
	},
	{
		id: "baby_310",
		question: "What is the recommended maximum duration for structured play activities with a 4-month-old baby?",
		options: ["5-10 minutes", "15-20 minutes", "30-45 minutes", "60 minutes"],
		correct: 0,
		explanation: "The recommended maximum duration for structured play activities with a 4-month-old baby is 5-10 minutes. At this age, babies have very short attention spans and immature nervous systems that become easily overstimulated. Brief, frequent play sessions throughout the day are more beneficial than longer activities. Watch for overstimulation signs including fussiness, turning away, arching back, or sudden sleepiness, which indicate it's time to stop. Structured activities should be simple, focusing on one sense at a time - like showing high-contrast cards or gentle singing. Always follow your baby's cues rather than predetermined time limits, as individual tolerance varies significantly.",
		difficulty: "medium",
		tags: ["play", "dev-0-6"]
	},
	{
		id: "baby_311",
		question: "Which play activity most effectively promotes hand-eye coordination in 6-month-old babies?",
		options: ["Reading board books together", "Offering toys to reach for and grasp", "Playing peek-a-boo games", "Singing nursery rhymes"],
		correct: 1,
		explanation: "Offering toys to reach for and grasp most effectively promotes hand-eye coordination in 6-month-old babies. At this age, babies are developing the crucial ability to coordinate visual information with purposeful hand movements. Reaching for and grasping objects requires visual tracking, depth perception, distance judgment, and motor planning working together. Place safe, appropriately-sized toys slightly out of easy reach to encourage reaching efforts. Offer various textures, shapes, and colors to maintain interest. While reading, peek-a-boo, and singing are valuable for language, social, and cognitive development, they don't specifically target the visual-motor integration skills that define hand-eye coordination.",
		difficulty: "medium",
		tags: ["play", "dev-0-6"]
	},
    {
        id: "baby_312",
        question: "What is the recommended total daily duration of tummy time for a healthy 6-month-old baby?",
        options: ["10-15 minutes total", "20-30 minutes total", "45-60 minutes total", "2+ hours total"],
        correct: 2,
        explanation: "By 6 months, babies should accumulate 45-60 minutes of supervised tummy time daily, divided into multiple short sessions. This crucial activity strengthens neck, shoulder, back, and core muscles needed for sitting, crawling, and other motor milestones. Start each session when baby is alert and content, gradually building from 3-5 minute intervals to longer periods as strength develops. Make it engaging with colorful toys, mirrors at eye level, and interactive play. Tummy time also prevents positional plagiocephaly (flat head syndrome) and promotes proper spinal alignment. Always supervise closely and use a firm, safe surface. If baby resists, try placing them on your chest, using a small rolled towel under the chest for support, or timing sessions after diaper changes when they're naturally more alert.",
        difficulty: "medium",
        tags: ["play", "dev-0-6", "health"]
    },
    {
        id: "baby_313",
        question: "At what age do babies typically develop the pincer grasp (ability to pick up objects using thumb and index finger)?",
        options: ["4-5 months", "6-7 months", "8-10 months", "11-13 months"],
        correct: 2,
        explanation: "Pincer grasp typically emerges between 8-10 months, representing a major fine motor milestone. This refined skill allows babies to pick up small objects precisely using thumb and index finger, transitioning from earlier whole-hand grasping patterns. The development follows a predictable sequence: first crude pincer grasp around 8-9 months, then refined pincer grasp by 10-12 months. This skill is essential for self-feeding finger foods, exploring small objects safely, and future writing development. Encourage practice with age-appropriate foods like puffs, soft berries, or pasta pieces, always ensuring items are larger than 1.25 inches to prevent choking. Provide supervised opportunities with large beads, blocks, or textured toys. If pincer grasp hasn't emerged by 12 months, discuss with your pediatrician as early intervention may be beneficial for optimal development.",
        difficulty: "medium",
        tags: ["play", "dev-6-18", "health"]
    },
    {
        id: "baby_314",
        question: "Which type of toy most effectively supports cognitive development in babies aged 8-10 months?",
        options: ["Soft stuffed animals for comfort", "Simple cause-and-effect toys", "Advanced electronic learning devices", "Tiny manipulative pieces"],
        correct: 1,
        explanation: "Simple cause-and-effect toys are optimal for 8-10 month cognitive development, as this is when babies begin understanding that their actions produce predictable results. Examples include pop-up toys, simple musical buttons, or toys where pushing/pulling creates sounds or movement. This developmental stage focuses on intentional action and consequence recognition, building foundational problem-solving and logical thinking skills. These toys also enhance hand-eye coordination and fine motor development while teaching concepts like object permanence and spatial relationships. Choose toys with immediate, clear responses that aren't overstimulating. Ensure safety by avoiding small parts (choking hazards), sharp edges, or fragile components. Rotate toys weekly to maintain engagement and provide new challenges. The ideal toys offer just the right complexity - challenging enough to engage but simple enough for success and mastery.",
        difficulty: "medium",
        tags: ["play", "dev-6-18", "cognitive"]
    },
    {
        id: "baby_315",
        question: "At what age is it developmentally appropriate to introduce supervised shallow water play activities?",
        options: ["2-3 months", "4-5 months", "6-8 months", "10-12 months"],
        correct: 2,
        explanation: "Supervised shallow water play becomes developmentally appropriate around 6-8 months when babies achieve better head control, trunk stability, and can sit with minimal support. This timing reduces safety risks while maximizing developmental benefits. Start with 1-2 inches of lukewarm water in a large container, always maintaining constant, undivided supervision. Water play enhances sensory processing, cause-and-effect understanding, and fine motor skills through pouring, splashing, and grasping activities. Provide safe bath toys, measuring cups, and floating objects for exploration. The sensory input supports neural development and can be calming for many babies. Never leave a child unattended near any amount of water - drowning can occur silently in less than 2 inches. Always test water temperature and ensure non-slip surfaces. This foundation builds toward more complex water play and eventual swimming readiness as motor skills mature.",
        difficulty: "medium",
        tags: ["play", "dev-6-18", "safety"]
    },
    {
        id: "baby_316",
        question: "What is the primary developmental benefit of musical exposure for babies in the first 6 months of life?",
        options: ["Teaching specific musical skills", "Enhancing auditory processing and brain development", "Developing physical rhythm coordination", "Improving visual-spatial abilities"],
        correct: 1,
        explanation: "Musical exposure in the first 6 months primarily enhances auditory processing and creates crucial neural pathways for brain development. During this critical period, the auditory system rapidly matures, and musical stimulation helps establish connections for sound discrimination, pattern recognition, and language foundation. Music activates multiple brain regions simultaneously, supporting cognitive development, memory formation, and emotional regulation. The complex auditory patterns in music enhance neural architecture more effectively than simple sounds alone. Research shows early musical exposure correlates with improved language development, mathematical reasoning, and attention skills later in development. Provide gentle lullabies, varied musical styles, and simple musical toys with different tones and rhythms. Keep volumes soft to protect developing hearing. While babies can't yet coordinate physical movements to music, the neurological benefits of passive musical exposure are profound and lasting, creating optimal conditions for future learning and development.",
        difficulty: "medium",
        tags: ["play", "dev-0-6", "cognitive"]
    },
    {
        id: "baby_317",
        question: "At what age do babies typically begin showing sustained attention and engagement during shared book reading?",
        options: ["2-3 months", "4-5 months", "6-8 months", "9-11 months"],
        correct: 2,
        explanation: "Babies typically develop sustained attention for shared reading around 6-8 months, when visual acuity, trunk stability for sitting, and attention span have matured adequately. At this stage, they can focus on colorful pictures, track page turning, and show clear preferences for certain books or images. They may reach for books, mouth them (safely with board books), vocalize during reading, or show excitement for favorite stories. This represents a significant shift from earlier brief, unfocused attention to genuine engagement and interaction. Choose sturdy board books with high-contrast images, simple illustrations, and varied textures to maximize engagement. Shared reading at this age builds pre-literacy skills including print awareness, visual tracking, and vocabulary development, while strengthening parent-child bonding. Even when babies seem distracted, consistent exposure creates positive associations with books and establishes routines that support lifelong literacy development. Follow baby's cues and keep sessions brief but frequent.",
        difficulty: "medium",
        tags: ["play", "dev-6-18", "learning"]
    },
    {
        id: "baby_318",
        question: "What ball size is both safest and most developmentally appropriate for a 9-month-old baby's play?",
        options: ["Ping pong ball size (1.5 inches)", "Tennis ball size (2.5 inches)", "Softball size (3.7 inches)", "Soccer ball size (8.5 inches)"],
        correct: 2,
        explanation: "A softball-sized ball (approximately 3.7 inches diameter) is optimal for 9-month-olds, being large enough to eliminate choking hazards while remaining manageable for developing motor skills. This size is perfect for two-handed grasping, promoting bilateral coordination and midline crossing - crucial skills for brain development. Smaller balls like ping pong or tennis balls pose serious choking risks, while soccer ball-sized balls are too large for effective manipulation at this age. Softball-sized balls support multiple developmental goals: visual tracking as they roll, cause-and-effect learning through dropping and throwing, and gross motor skills as babies crawling to retrieve them. Choose soft materials like foam, fabric, or soft rubber to prevent injury during exploration and mouthing. Balls with varied textures, gentle sounds, or bright colors add valuable sensory input. Always supervise ball play and regularly inspect for wear or damage that could create safety hazards.",
        difficulty: "medium",
        tags: ["play", "dev-6-18", "safety"]
    },
    {
        id: "baby_319",
        question: "What is the evidence-based recommendation for electronic toy use with babies under 12 months?",
        options: ["Avoid all electronic toys until age 2", "Use sparingly with simple, age-appropriate options", "Use extensively for educational benefits", "Only use electronic toys without batteries"],
        correct: 1,
        explanation: "Research supports using electronic toys sparingly with babies under 12 months, prioritizing simple, age-appropriate options that enhance rather than replace human interaction. The most beneficial electronic toys for this age feature clear cause-and-effect relationships, gentle sounds, and volume controls to prevent overstimulation. Studies show babies learn most effectively through human interaction, simple toys, and hands-on exploration of their environment. While quality electronic toys can supplement development, they shouldn't dominate playtime. Choose toys that encourage active engagement rather than passive consumption, avoiding those with rapid flashing lights, loud sounds, or complex sequences that may overwhelm developing nervous systems. Simple toys like blocks, balls, and books often provide richer developmental experiences than sophisticated electronic alternatives. The key is balance - occasional use of carefully selected electronic toys can support development when used alongside plenty of caregiver interaction, reading, and exploration of natural materials and textures.",
        difficulty: "medium",
        tags: ["play", "dev-0-12", "learning"]
    },
    {
        id: "baby_320",
        question: "At what age do babies typically begin demonstrating object permanence through their play behaviors?",
        options: ["3-4 months", "5-7 months", "8-10 months", "11-13 months"],
        correct: 2,
        explanation: "Object permanence typically emerges around 8-10 months, representing a major cognitive leap where babies understand objects continue existing even when hidden from view. Early signs appear around 4-6 months when babies notice objects disappearing, but true object permanence develops later when they actively search for completely hidden items. This milestone transforms play experiences, enabling genuine enjoyment of peek-a-boo games, container play where objects are hidden and retrieved, and early problem-solving activities. Before developing object permanence, babies follow an 'out of sight, out of mind' pattern, showing little concern for disappeared objects. The skill develops progressively: first tracking moving objects, then searching for partially hidden items, finally understanding objects can be moved to new hiding places. Encourage development through hiding games, peek-a-boo variations, and toys that can be concealed under cloths or in containers. This cognitive achievement indicates healthy brain development and establishes foundations for symbolic thinking, memory, and advanced problem-solving skills.",
        difficulty: "medium",
        tags: ["play", "dev-6-18", "cognitive"]
    },
    {
        id: "baby_321",
        question: "Which type of container play is most developmentally appropriate and safe for babies aged 10-12 months?",
        options: ["Small containers with marble-sized objects", "Large containers with appropriately-sized safe objects", "Containers with complex locking mechanisms", "Any adult containers they show interest in"],
        correct: 1,
        explanation: "Large containers paired with appropriately-sized safe objects provide optimal developmental benefits for 10-12 month babies while maintaining safety standards. Use containers larger than a toilet paper roll diameter, filled with objects bigger than 1.25 inches to prevent choking hazards. This play powerfully supports multiple developmental domains: fine motor skills through grasping and releasing, cognitive development via cause-and-effect learning, and spatial reasoning through understanding concepts like 'in,' 'out,' 'full,' and 'empty.' Container play also enhances bilateral coordination as babies use both hands together and promotes problem-solving skills as they figure out how to fit objects inside. Choose objects with varied textures, colors, and shapes for rich sensory input - soft blocks, large wooden beads, fabric squares, or safe household items work well. Always maintain close supervision since babies explore everything through mouthing. This simple yet powerful play activity builds foundations for future mathematical concepts, organizational skills, and executive function development.",
        difficulty: "medium",
        tags: ["play", "dev-6-18", "cognitive"]
    },
    {
		id: "baby_322",
		question: "What is the maximum recommended daily time for babies 6-12 months to spend in carriers or seats during awake play periods?",
		options: ["30 minutes total", "1-2 hours maximum", "3-4 hours maximum", "As long as baby seems content"],
		correct: 1,
		explanation: "Babies should spend no more than 1-2 hours daily in carriers, bouncy seats, or other equipment during awake time to ensure adequate free movement for healthy development. Extended periods in these devices can limit crucial tummy time, restrict natural movement patterns, delay motor skill development, and reduce sensory exploration opportunities. Babies need floor time to practice rolling, reaching, crawling, and other developmental skills. The AAP recommends prioritizing unrestricted floor play over equipment use. Signs baby needs more floor time include fussiness in equipment, delayed motor milestones, or preferring to be held rather than exploring independently.",
		difficulty: "medium",
		tags: ["play", "dev-6-18", "safety"]
	},
	{
		id: "baby_323",
		question: "Which common household item poses the most serious choking hazard during supervised sensory play with babies 6-12 months?",
		options: ["Empty toilet paper tubes", "Large wooden cooking spoons", "Clean kitchen towels", "Empty plastic water bottles with caps removed"],
		correct: 0,
		explanation: "Empty toilet paper tubes are extremely dangerous because their diameter (approximately 1.5 inches) can become perfectly lodged in a baby's throat, creating a complete airway obstruction that's difficult to dislodge. This size falls within the most hazardous range for choking. While other household items can pose risks, toilet paper tubes represent a unique 'perfect fit' danger. Safe alternatives for sensory play include large wooden spoons (too big to swallow), clean towels (soft texture exploration), or bottles without caps under supervision. Always use the toilet paper tube test: if an object fits through a tube, it's too small for babies. Remove all toilet paper tubes from baby's environment and choose sensory materials larger than 1.25 inches in all dimensions.",
		difficulty: "easy",
		tags: ["play", "safety", "dev-6-18"]
	},
	{
		id: "baby_324",
		question: "How should parents respond when their 8-month-old repeatedly drops toys from the high chair during meals?",
		options: ["Stop the behavior immediately as disruptive", "Encourage it as important developmental learning", "Ignore it completely to avoid reinforcing", "Allow it only once per meal"],
		correct: 1,
		explanation: "Repetitive dropping is crucial developmental play representing important cognitive learning about cause-and-effect, gravity, spatial relationships, and object permanence. Babies are conducting 'experiments' to understand how the world works. This behavior typically peaks around 8-10 months and naturally decreases as curiosity is satisfied. Parents should encourage this learning while managing practicalities: offer 2-3 toys, pick them up cheerfully, narrate what's happening ('Down it goes!'), and provide a basket underneath for easy retrieval. Stopping this behavior can interfere with natural learning processes. However, set reasonable limits during meals by offering designated 'dropping toys' and removing others when eating begins. This phase is temporary but represents significant brain development.",
		difficulty: "medium",
		tags: ["play", "dev-6-18"]
	},
	{
		id: "baby_325",
		question: "At what age do babies typically transition from parallel activity to engaging in true back-and-forth social play?",
		options: ["3-4 months", "5-7 months", "8-9 months", "10-12 months"],
		correct: 3,
		explanation: "True social play with intentional back-and-forth interactions typically emerges around 10-12 months as babies develop theory of mind and intentional communication skills. Before this, babies engage in parallel activity - playing near others but not truly 'with' them. Early social behaviors like smiling and cooing (3-4 months) are responsive rather than interactive play. Around 8-9 months, babies show increased social interest but lack the cognitive skills for sustained reciprocal play. By 10-12 months, babies begin games like patty-cake, peek-a-boo with role reversal, and simple turn-taking activities. They start to understand that others have intentions and can participate in shared goals. Parents can encourage social play development through simple games, imitation, and responding enthusiastically to baby's social overtures.",
		difficulty: "medium",
		tags: ["play", "dev-6-18", "language"]
	},
	{
		id: "baby_326",
		question: "What is the safest container size for 'dump and fill' play activities with babies 10-12 months?",
		options: ["Small enough for baby to hold easily", "Large enough that baby's head cannot fit inside", "Medium-sized like a cereal bowl", "Any size is safe with constant supervision"],
		correct: 1,
		explanation: "Containers must be large enough that a baby's head cannot fit inside to prevent entrapment and suffocation hazards. Even with supervision, babies can quickly get their heads stuck in containers, creating emergency situations. The safest containers are wide, shallow bins at least 12 inches in diameter or open baskets. Avoid buckets, deep bowls, or any container with narrow openings. Good options include large mixing bowls, laundry baskets, or specially designed toy bins. Fill with safe objects larger than 1.25 inches (ping pong balls, large blocks, scarves). This play develops fine motor skills, hand-eye coordination, spatial awareness, and cause-and-effect understanding. Always supervise closely and remove containers when play ends to prevent unsupervised access.",
		difficulty: "easy",
		tags: ["play", "safety", "dev-6-18"]
	},
	{
		id: "baby_327",
		question: "What is the minimum recommended floor space for safe crawling play for an 8-month-old baby?",
		options: ["4x4 feet", "6x6 feet", "8x8 feet", "12x12 feet"],
		correct: 2,
		explanation: "An 8x8 foot area provides adequate space for safe crawling exploration while allowing parents to maintain supervision. Newly mobile babies need room to practice movement patterns, build spatial awareness, and develop gross motor skills without constantly encountering barriers. Smaller spaces increase collision risks and limit natural movement development. Larger spaces can make supervision challenging. The play area should be fully baby-proofed with soft flooring, secured furniture, covered outlets, and removal of small objects. Create clear boundaries using furniture or baby gates. This space allows for tummy time, rolling, crawling, and eventually pulling to stand. Rotate toys within the space to maintain interest. As babies become more skilled crawlers around 10-12 months, they can safely navigate slightly larger areas with continued supervision and safety measures.",
		difficulty: "medium",
		tags: ["play", "safety", "dev-6-18"]
	},
	{
		id: "baby_328",
		question: "Which exploratory behavior typically appears first in babies around 4-6 months during play?",
		options: ["Banging two objects together", "Shaking rattles with intention", "Reaching and grasping for specific toys", "Bringing objects to mouth for exploration"],
		correct: 3,
		explanation: "Mouthing objects is one of the earliest and most important exploratory behaviors, typically beginning around 4-6 months as babies' mouth sensitivity helps them learn about texture, size, shape, and material properties. This oral exploration provides crucial sensory information that hands cannot yet provide effectively. Reaching and grasping develop around the same time but are less refined initially. Intentional shaking and banging require more advanced motor planning and typically appear around 6-8 months. Mouthing continues throughout the first year as a primary learning method. Ensure mouthed objects are clean, safe, and large enough to prevent choking (larger than 1.25 inches). This behavior is normal and necessary for development - avoid discouraging it but provide appropriate, safe objects specifically for oral exploration like large textured teething toys.",
		difficulty: "medium",
		tags: ["play", "dev-0-6", "dev-6-18"]
	},
	{
		id: "baby_329",
		question: "Which behavior most reliably indicates a baby is becoming overstimulated during play and needs a break?",
		options: ["Increased excited vocalizations", "Repeatedly looking away or turning head", "Reaching for additional toys", "More vigorous body movements"],
		correct: 1,
		explanation: "Gaze aversion - repeatedly looking away or turning the head - is the most reliable early sign of overstimulation in babies. This is a natural self-regulation strategy babies use to manage overwhelming sensory input. Other overstimulation signs include fussiness, arching back, clenched fists, or becoming very still. Increased vocalizations and reaching for more toys typically indicate engagement, while vigorous movements often show excitement rather than overwhelm. When babies look away, parents should follow their lead by reducing stimulation: lower your voice, dim lights, reduce toy choices, or take a quiet break. Respecting these cues helps babies develop self-regulation skills and prevents meltdowns. Overstimulated babies often need several minutes of calm, low-stimulation time to reset before resuming play activities.",
		difficulty: "easy",
		tags: ["play", "dev-0-6", "dev-6-18"]
	},
	{
		id: "baby_330",
		question: "What is the typical maximum duration a healthy 6-month-old can sustain independent play before seeking adult interaction?",
		options: ["1-3 minutes", "5-10 minutes", "15-20 minutes", "25-30 minutes"],
		correct: 1,
		explanation: "Most 6-month-old babies can sustain independent play for only 5-10 minutes before needing adult interaction, encouragement, or assistance. This short attention span is completely normal and appropriate for their developmental stage. Independent play skills develop gradually - newborns need constant interaction, while 6-month-olds are just beginning to explore toys solo. By 12 months, some babies may play independently for 10-15 minutes. Factors affecting duration include baby's temperament, tiredness, hunger, and toy selection. Parents can gradually extend independent play by staying nearby, offering occasional verbal encouragement, and providing engaging but not overstimulating toys. Rotate toys to maintain novelty. Don't worry if your baby prefers interactive play - social engagement is equally important for development. Independent play skills will naturally increase with maturity and practice.",
		difficulty: "easy",
		tags: ["play", "dev-6-18"]
	},
    {
        id: "baby_331",
        question: "What is the most developmentally appropriate toy characteristic for babies aged 2-4 months who are beginning to swipe at objects?",
        options: [
        "High contrast black and white patterns only",
        "Lightweight, large objects hanging 8-12 inches above chest",
        "Small rattles that make loud sounds",
        "Soft toys with many small parts to explore"
        ],
        correct: 1,
        explanation: "At 2-4 months, babies are developing visual tracking and beginning intentional arm movements, progressing from random swipes to purposeful reaching. Lightweight objects positioned 8-12 inches above their chest allow safe practice of these emerging motor skills without risk of injury if the toy falls. This distance matches their developing vision focus range and arm reach capability. While high contrast patterns support visual development, proper positioning and safety are paramount for active play. Small objects pose choking hazards, and toys with multiple parts are inappropriate since babies this age cannot yet grasp securely and everything goes to their mouth. Supervision and toy rotation help maintain engagement during this critical motor development period.",
        difficulty: "medium",
        tags: ["play", "dev-0-6"]
    },
    {
        id: "baby_332",
        question: "When do babies typically develop the ability to bang two objects together intentionally?",
        options: [
        "4-5 months",
        "6-7 months",
        "8-9 months",
        "10-11 months"
        ],
        correct: 2,
        explanation: "Babies typically develop the ability to bang two objects together intentionally around 8-9 months. This milestone requires coordinated development of bilateral hand use, intentional motor planning, and understanding that their actions create interesting effects. Earlier attempts are usually accidental rather than purposeful. This skill often emerges alongside other complex motor abilities like crawling and advanced sitting balance. It represents an important step toward tool use and problem-solving abilities. Parents can encourage this development by offering safe objects like large wooden blocks or plastic rings, ensuring items are too large to pose choking hazards. Individual babies may reach this milestone anywhere from 7-10 months, and the progression from random banging to intentional, repeated actions shows growing cognitive sophistication.",
        difficulty: "medium",
        tags: ["play", "dev-6-18"]
    },
    {
        id: "baby_333",
        question: "What is the primary developmental benefit of providing rattles to babies in their first 3 months?",
        options: [
        "Teaching cause and effect relationships",
        "Developing fine motor grasping skills",
        "Stimulating auditory processing and alertness",
        "Encouraging social interaction through play"
        ],
        correct: 2,
        explanation: "In the first 3 months, the primary benefit of rattles is stimulating auditory processing and alertness when parents shake them near the baby. Newborns have well-developed hearing and respond positively to gentle, varied sounds that support brain development and attention skills. At this age, babies cannot yet grasp objects intentionally (this develops around 4-6 months) or understand cause-and-effect relationships (emerging around 4-8 months). While rattles can enhance parent-child interaction, their main developmental value is providing appropriate auditory stimulation during this period when babies are primarily sensory learners rather than active manipulators. Parents should use rattles with gentle sounds and vary the auditory experiences to support optimal hearing development and environmental awareness.",
        difficulty: "medium",
        tags: ["play", "dev-0-6", "newborn"]
    },
    {
        id: "baby_334",
        question: "At what age do babies typically begin engaging in functional toy play (using toys for their intended purpose)?",
        options: [
        "6-8 months",
        "9-12 months",
        "12-15 months",
        "15-18 months"
        ],
        correct: 1,
        explanation: "Functional toy play typically begins around 9-12 months when babies start using toys for their intended purposes rather than just exploring them. Examples include pushing toy cars instead of just mouthing them, pressing buttons to activate sounds, or attempting to put shapes in appropriate holes. This represents a major cognitive advancement from earlier sensory exploration (mouthing, banging, dropping) to understanding that objects have specific functions. This milestone requires developing object permanence, memory of cause-and-effect relationships, and intentional motor planning. The progression often starts with simple functions like pressing large buttons and gradually becomes more complex. Individual babies may show early signs around 8-9 months or not until closer to 12 months, depending on their exposure to appropriate toys and overall development.",
        difficulty: "medium",
        tags: ["play", "dev-6-18"]
    },
    {
        id: "baby_335",
        question: "What is the recommended approach for introducing stacking toys to babies?",
        options: [
        "Start with 10+ rings to provide variety",
        "Begin with 2-3 large, lightweight pieces around 8-10 months",
        "Wait until 12+ months when fine motor skills are fully developed",
        "Use only soft fabric pieces to prevent injury"
        ],
        correct: 1,
        explanation: "Stacking toys should be introduced around 8-10 months starting with just 2-3 large, lightweight pieces. At this age, babies are developing bilateral hand coordination and spatial awareness needed for stacking, but they need simplified versions to experience success and build confidence. Too many pieces create cognitive overload and frustration, while too few limit learning opportunities. Large pieces are both safer (reducing choking risk) and easier for developing fine motor skills to manipulate. Materials should be firm enough to stack successfully - purely soft toys don't provide the stability needed for this learning. As babies master basic stacking over the following months, additional pieces can be gradually introduced to increase challenge appropriately. Starting simple allows focus on the fundamental motor planning and spatial concepts essential for this milestone.",
        difficulty: "medium",
        tags: ["play", "dev-6-18", "safety"]
    },
    {
        id: "baby_336",
        question: "What characterizes appropriate sensory play activities for babies aged 6-9 months?",
        options: [
        "Activities that primarily involve passive observation",
        "Exploration of different textures under close supervision",
        "Independent play with small objects for fine motor development",
        "Complex multi-step activities requiring adult demonstration"
        ],
        correct: 1,
        explanation: "Appropriate sensory play for 6-9 month babies centers on supervised exploration of varied textures, as this age group learns primarily through tactile and oral exploration. Babies at this stage are highly motivated to actively investigate their environment through touching, grasping, and mouthing objects, making diverse sensory experiences essential for brain development. Close supervision is crucial since everything goes to their mouth for exploration. Activities might include supervised exploration of different fabric textures, safe sensory bins with large objects, or appropriate food textures during meals. Passive observation doesn't match their developmental drive for active engagement, while small objects pose serious choking hazards. Complex multi-step activities exceed their cognitive processing abilities and attention span. The key is providing rich, varied sensory input while maintaining constant safety oversight.",
        difficulty: "medium",
        tags: ["play", "dev-6-18", "safety"]
    },
    {
        id: "baby_337",
        question: "When do babies typically show the ability to engage in simple pretend play, like pretending to drink from an empty cup?",
        options: [
        "8-10 months",
        "10-12 months",
        "12-15 months",
        "15-18 months"
        ],
        correct: 2,
        explanation: "Simple pretend play typically emerges around 12-15 months, marking an important cognitive milestone in symbolic thinking development. Babies begin demonstrating that they understand objects can represent something beyond their immediate function - like pretending to drink from empty cups, feeding stuffed animals, or 'talking' on toy phones. This represents a significant leap from earlier functional play where objects were used only for their intended purposes. The development of pretend play often coincides with advancing language skills and walking, as all reflect growing abstract thinking abilities. Early pretend play is usually brief and simple, involving familiar daily activities, and gradually becomes more elaborate and creative as children approach their second birthday. This milestone supports both cognitive development and early communication skills as children begin to express ideas through actions.",
        difficulty: "medium",
        tags: ["play", "dev-6-18", "language"]
    },
    {
        id: "baby_338",
        question: "What is the most appropriate way to support musical exploration for babies aged 3-8 months?",
        options: [
        "Provide complex electronic keyboards with many buttons",
        "Offer simple instruments like maracas they can shake independently",
        "Play varied music while allowing natural movement responses",
        "Focus primarily on classical music for brain development"
        ],
        correct: 2,
        explanation: "For babies aged 3-8 months, musical exploration is best supported by playing varied types of music while encouraging their natural movement responses such as bouncing, swaying, or excited arm movements. At this developmental stage, babies experience music primarily through listening and whole-body responses rather than active instrument manipulation. Their motor skills aren't yet developed for safe independent use of instruments like maracas, which could pose safety risks if broken. Complex electronic toys are overwhelming and inappropriate for their developmental level. While classical music offers benefits, exposing babies to diverse musical styles (folk, jazz, lullabies, world music) supports broader auditory processing and cultural awareness. The focus should be on joyful musical experiences that naturally encourage rhythm awareness and auditory development through responsive listening and movement.",
        difficulty: "medium",
        tags: ["play", "dev-0-6", "language"]
    },
    {
        id: "baby_339",
        question: "What is the primary safety consideration when selecting balls for babies aged 8-12 months?",
        options: [
        "Balls should be soft enough to compress completely when squeezed",
        "Balls must be larger than 1.75 inches to prevent choking",
        "Balls should have textured surfaces for better grip",
        "Balls must be made from natural materials only"
        ],
        correct: 1,
        explanation: "The primary safety consideration when selecting balls for babies aged 8-12 months is ensuring they are larger than 1.75 inches in diameter to prevent choking hazards. This measurement, based on the standard small parts test tube, represents the critical size threshold for objects that could become lodged in a child's throat. Babies in this age group actively explore objects through mouthing, and any ball small enough to fit entirely in their mouth poses a serious choking risk. While textured surfaces can enhance grip and natural materials may be preferable, size is the fundamental safety requirement that takes precedence. Balls don't need to compress completely when squeezed - some firmness is actually beneficial for developing throwing and catching skills. This 1.75-inch safety standard applies to all toys and toy parts for children under 3 years old.",
        difficulty: "medium",
        tags: ["play", "safety", "dev-6-18"]
    },
    {
        id: "baby_340",
        question: "What is the safest approach to introducing texture exploration play for babies aged 4-6 months?",
        options: ["Small finger-sized textured toys and teethers", "Large textured fabrics and mats under close supervision", "Textured solid foods during meal times", "Textured toys during independent bath play"],
        correct: 1,
        explanation: "For 4-6 month old babies beginning texture exploration, large textured materials like fabric squares, sensory mats, or textured boards provide safe tactile experiences without choking risks. At this age, babies explore primarily through mouthing, so materials must be too large to pose choking hazards. Supervised exploration of varied textures (smooth satin, bumpy corduroy, soft fleece, rough canvas) supports crucial sensory development and neural pathway formation. Small textured objects can cause choking, textured foods aren't appropriate until babies show readiness for solids (typically 6+ months), and bath play requires constant supervision with different safety protocols. Always ensure fabrics are clean, securely attached if part of toys, and large enough that babies cannot bunch them up and create choking hazards.",
        difficulty: "medium",
        tags: ["play", "safety"]
    },
    {
        id: "baby_341",
        question: "When do babies typically demonstrate understanding that hidden objects still exist (object permanence) during play?",
        options: ["2-4 months old", "4-6 months old", "8-12 months old", "12-18 months old"],
        correct: 2,
        explanation: "Object permanence - the understanding that objects continue to exist even when hidden from view - typically emerges between 8-12 months of age. Parents observe this when babies actively search for toys hidden under blankets, look for dropped items, or continue reaching toward where a toy disappeared. Before this age, babies follow the 'out of sight, out of mind' principle and lose interest when objects vanish. Games like peek-a-boo become more engaging around 8-10 months because babies understand you're still there behind your hands. This represents a major cognitive leap in understanding the permanent nature of the world. Some babies may show early signs around 6-7 months, while others develop this skill closer to their first birthday, which is completely normal developmental variation.",
        difficulty: "medium",
        tags: ["play", "dev-6-18"]
    },
    {
        id: "baby_342",
        question: "What is the most appropriate way to support a 6-month-old baby's emerging sitting skills during play?",
        options: ["Place baby in high chair or infant seat for extended play sessions", "Use soft pillows or cushions to prop baby in sitting position", "Provide supported sitting with adult assistance on the floor", "Wait until baby sits independently before introducing sitting play"],
        correct: 2,
        explanation: "At 6 months, babies benefit from supported sitting practice to develop core strength and balance while safely experiencing this new perspective during play. Adult-supported sitting - either with gentle hands at baby's hips or sitting baby between adult's legs - provides appropriate stability while allowing natural movement and muscle development. This supported practice is crucial for building the strength needed for independent sitting. Extended periods in high chairs or infant seats don't allow for natural movement and muscle development. Pillows for propping create suffocation risks and don't provide proper postural support. Waiting until independent sitting (typically 6-8 months) delays valuable developmental experiences. Supported sitting should be brief initially, gradually increasing as baby's strength improves, always with close supervision.",
        difficulty: "medium",
        tags: ["play", "dev-0-6", "safety"]
    },
    {
        id: "baby_343",
        question: "At what age do babies typically begin showing genuine interest in manipulative play with containers and simple puzzles?",
        options: ["4-6 months old", "6-8 months old", "10-12 months old", "15-18 months old"],
        correct: 2,
        explanation: "Around 10-12 months, babies develop the necessary cognitive and fine motor skills for meaningful manipulative play with containers, shape sorters, and simple puzzles. This timing coincides with several key developments: refined pincer grasp for precise object manipulation, improved hand-eye coordination, emerging spatial awareness, and beginning problem-solving abilities. Babies this age enjoy purposeful actions like putting objects into containers, stacking rings, and simple shape-sorting activities. Earlier ages lack the motor precision and cognitive understanding needed for these complex manipulations. This type of play significantly supports cognitive development, spatial reasoning, hand-eye coordination, and early problem-solving skills. Parents should choose age-appropriate versions with larger pieces to ensure safety while providing developmental challenge.",
        difficulty: "medium",
        tags: ["play", "dev-6-18"]
    },
    {
        id: "baby_344",
        question: "What is the recommended approach for introducing musical instruments to babies aged 3-9 months?",
        options: ["Small handheld rattles, bells, and traditional maracas", "Large, soft musical toys designed specifically for infants", "Electronic keyboards and complex musical toys with multiple buttons", "Delay musical instrument introduction until 12+ months"],
        correct: 1,
        explanation: "For babies 3-9 months, large, soft musical instruments specifically designed for infants provide safe musical exploration while supporting crucial auditory and motor development. Examples include oversized fabric maracas, soft drums with smooth surfaces, or large wooden shakers too big to swallow. These instruments allow babies to explore cause-and-effect relationships, develop rhythm awareness, and experience different sounds safely. Small instruments pose choking hazards as babies this age explore primarily through mouthing. Complex electronic toys can be overstimulating and don't provide the tactile feedback important for this age. Delaying musical exposure misses critical auditory development opportunities. Musical exploration supports language development, spatial reasoning, and emotional regulation. Always supervise use and ensure instruments are made from non-toxic materials and sized appropriately for safety.",
        difficulty: "medium",
        tags: ["play", "dev-0-6", "safety"]
    },
    {
        id: "baby_345",
        question: "How should parents respond when their 7-month-old repeatedly throws toys from the high chair during meals?",
        options: ["Remove all toys immediately and focus only on eating", "Repeatedly retrieve toys while saying 'no throwing'", "Understand this as normal development but limit toys during meals", "Ignore the behavior completely until it stops"],
        correct: 2,
        explanation: "Throwing objects at 7 months represents normal developmental exploration of cause-and-effect, gravity, and spatial relationships rather than defiance or misbehavior. Babies are learning 'What happens when I let go?' and observing predictable outcomes. While this behavior is developmentally important, parents can manage it practically by offering one or two appropriate toys during meals, calmly acknowledging the throwing without excessive reaction, and having designated floor play time for throwing exploration. Completely removing all objects prevents valuable learning opportunities. Repeatedly retrieving items while saying 'no' can inadvertently reinforce the behavior by making it into a game. Understanding this as normal cognitive development helps parents respond calmly while setting reasonable boundaries. This phase typically peaks around 8-10 months and gradually decreases as novelty wears off.",
        difficulty: "medium",
        tags: ["play", "dev-6-18"]
    },
    {
        id: "baby_346",
        question: "What is the appropriate supervision level for a 9-month-old baby during independent floor play?",
        options: ["Constant direct visual supervision at all times", "Within the same room with full attention on baby's activities", "Same room supervision while doing quiet tasks nearby", "Adjacent room with frequent check-ins every 2-3 minutes"],
        correct: 1,
        explanation: "Nine-month-old babies need to be in the same room with an adult's full attention during floor play, even though constant staring isn't necessary. At this age, babies are newly mobile (crawling, cruising, pulling up) but lack safety awareness and judgment. They can get into dangerous situations quickly - finding small objects to mouth, pulling on cords, or attempting to climb unsafe surfaces. Room-level supervision allows adults to respond immediately while letting babies explore independently within safe boundaries. A properly baby-proofed play area is essential. Adults can engage in quiet nearby activities but should maintain awareness of baby's location and actions. This supervision level supports developing independence while ensuring safety. Adjacent room supervision isn't adequate due to how quickly mobile babies can encounter hazards, even in baby-proofed spaces.",
        difficulty: "medium",
        tags: ["play", "safety", "dev-6-18"]
    },
    {
        id: "baby_347",
        question: "At what age do babies typically begin engaging in functional play, using toys for their intended purpose?",
        options: ["4-6 months old", "6-8 months old", "12-15 months old", "18-24 months old"],
        correct: 2,
        explanation: "Functional play - using objects for their intended purpose rather than just mouthing or banging them - typically emerges around 12-15 months of age. This milestone represents significant cognitive development as babies demonstrate understanding of object functions and begin meaningful imitation of observed adult behaviors. Examples include pretending to talk on a toy phone, attempting to brush hair with a brush, stirring with a spoon, or trying to feed a doll. This differs from earlier sensory exploration where babies primarily mouth, shake, or bang objects regardless of their intended function. Functional play indicates developing symbolic thinking, improved memory, and social understanding through imitation. This progression lays important groundwork for more complex pretend play that develops in the second year. Parents can support this development by modeling appropriate toy use and providing simple, realistic toys that mirror familiar household objects.",
        difficulty: "medium",
        tags: ["play", "dev-6-18"]
    },
    {
		id: "baby_348",
		question: "What is the most effective way to support bilateral coordination development in babies aged 6-8 months?",
		options: ["Encourage clapping games", "Provide toys that require two hands to operate", "Focus on single-handed activities first", "Wait until walking develops"],
		correct: 1,
		explanation: "Toys requiring two-handed operation most effectively support bilateral coordination in 6-8 month babies. Examples include large textured balls, activity cubes with handles on both sides, and toys with multiple parts requiring coordination. Bilateral coordination - using both body sides together - is essential for crawling, walking, and future fine motor skills. While clapping games help, they provide limited practice time. Focusing on single-handed activities actually delays bilateral development. This age is optimal because brain connections between hemispheres are rapidly forming. Look for toys that encourage babies to bring both hands to midline, transfer objects between hands, and manipulate items requiring coordinated movement from both sides.",
		difficulty: "medium",
		tags: ["play", "dev-6-18"]
	},
	{
		id: "baby_349",
		question: "At what age do babies typically begin demonstrating spatial reasoning through play activities?",
		options: ["4-6 months", "6-8 months", "10-12 months", "15-18 months"],
		correct: 2,
		explanation: "Babies typically demonstrate spatial reasoning around 10-12 months through activities like shape sorting, successful stacking, and understanding how objects fit into containers. This represents true problem-solving about spatial relationships, not just random exploration. Earlier container play (6-8 months) shows spatial awareness but lacks the cognitive planning seen in true spatial reasoning. Key signs include deliberately turning objects to make them fit, understanding that bigger items won't fit in smaller spaces, and successfully completing simple shape sorters after studying the relationship. This skill foundation supports later math concepts, engineering thinking, and problem-solving abilities. Encourage development with graduated nesting toys, simple shape sorters, and containers of various sizes for experimentation.",
		difficulty: "medium",
		tags: ["play", "dev-6-18"]
	},
	{
		id: "baby_350",
		question: "What is the primary developmental benefit of supervised water play for babies aged 6-12 months?",
		options: ["Muscle strengthening", "Sensory integration", "Language development", "Social skills"],
		correct: 1,
		explanation: "Sensory integration is the primary benefit of supervised water play for babies 6-12 months. Water provides unique sensory input through temperature, pressure, and movement that helps develop body awareness and sensory processing skills. The resistance and flow of water offer different feedback than air, supporting nervous system development. Water play naturally encourages bilateral coordination, cause-and-effect learning, and fine motor skills through safe pouring and splashing activities. Always maintain constant supervision and use only 1-2 inches of water depth. This sensory-rich experience helps babies regulate their nervous systems and supports attention and learning abilities. Bath time and supervised shallow containers provide ideal opportunities for this beneficial sensory experience while maintaining safety.",
		difficulty: "medium",
		tags: ["play", "dev-6-18", "safety"]
	},
	{
		id: "baby_351",
		question: "When do babies typically transition from exploratory mouthing to functional object manipulation during play?",
		options: ["4-6 months", "6-8 months", "8-10 months", "10-12 months"],
		correct: 2,
		explanation: "Babies typically transition from primarily exploratory mouthing to functional object manipulation around 8-10 months. While mouthing continues as a valuable exploration method, babies begin using hands more purposefully to shake, bang, transfer, and manipulate objects. This shift reflects improved fine motor control, better hand-eye coordination, and cognitive development allowing understanding of object properties beyond oral exploration. The transition is gradual - both behaviors coexist throughout the first year. Functional manipulation includes deliberate actions like banging two objects together, turning objects to examine them, and transferring items between hands. This progression supports cognitive development through cause-and-effect learning and spatial understanding. Parents should continue providing mouthable safe toys while introducing items that encourage varied manipulation skills.",
		difficulty: "medium",
		tags: ["play", "dev-6-18"]
	},
	{
		id: "baby_352",
		question: "What is the optimal frequency for rotating toys to maintain baby's interest and development?",
		options: ["Daily", "Weekly", "Every 2-3 weeks", "Monthly"],
		correct: 2,
		explanation: "Rotating toys every 2-3 weeks optimally maintains baby's interest while supporting development. This timeframe allows babies to fully explore and master skills with current toys before introducing new challenges. Too frequent rotation prevents deep exploration and skill consolidation, while monthly rotation may lead to boredom and reduced learning. The 2-3 week cycle aligns with typical baby engagement patterns: initial exploration, skill building, mastery, then readiness for new challenges. Watch for signs of decreased interest or easy mastery as rotation cues. Keep 3-5 toys available at once, storing others out of sight. Maintain core favorites while rotating others. Individual babies may need shorter or longer cycles based on developmental pace and attention span. This approach maximizes each toy's developmental benefit while maintaining engagement.",
		difficulty: "easy",
		tags: ["play"]
	},
	{
		id: "baby_353",
		question: "What type of play environment best supports creativity development in babies aged 9-12 months?",
		options: ["Highly structured with specific rules", "Open-ended with simple materials", "Electronic toys with multiple functions", "Adult-directed activities only"],
		correct: 1,
		explanation: "Open-ended play environments with simple materials best support creativity development in 9-12 month babies. Simple items like cardboard boxes, containers, wooden blocks, and fabric scraps allow babies to explore multiple uses and develop innovative thinking. Unlike toys with predetermined functions, open-ended materials encourage experimentation and original problem-solving. This age marks the beginning of understanding that objects have multiple possible uses, a foundation for creative thinking. Electronic toys often limit exploration to programmed responses, while highly structured activities prevent creative discovery. Safety remains paramount - ensure all materials are large enough to prevent choking and free from small parts. The goal is providing safe, simple materials that invite exploration while allowing babies freedom to discover their own creative applications through hands-on experimentation.",
		difficulty: "medium",
		tags: ["play", "dev-6-18"]
	},
	{
		id: "baby_354",
		question: "At what age do babies typically begin engaging in sustained focused attention during play activities?",
		options: ["2-4 months", "4-6 months", "6-9 months", "9-12 months"],
		correct: 3,
		explanation: "Babies typically develop sustained focused attention during play around 9-12 months, maintaining focus on single activities for 2-3 minutes. Before this age, attention is brief and easily disrupted, with focus lasting only seconds to one minute. By 9-12 months, babies show persistence in exploring objects, working through challenges, and returning to interrupted activities. This development reflects improved executive function, better motor control, and increased cognitive capacity. Sustained attention enables complex learning and skill mastery. Signs include repeatedly attempting to solve problems, thoroughly exploring objects before moving on, and showing frustration when interrupted. Support development by creating distraction-free environments, following baby's lead in activities, and allowing uninterrupted exploration time. This milestone indicates readiness for more complex toys requiring persistence and problem-solving skills.",
		difficulty: "medium",
		tags: ["play", "dev-6-18"]
	},
	{
		id: "baby_355",
		question: "What is the most important safety consideration when introducing art exploration activities to babies aged 8-12 months?",
		options: ["Ensuring non-toxic materials only", "Preventing mess and staining", "Supervising to prevent ingestion", "Using age-appropriate tools only"],
		correct: 2,
		explanation: "Supervising to prevent ingestion is the most critical safety consideration for art exploration with 8-12 month babies. At this age, mouthing remains a primary exploration method, making constant supervision essential even with non-toxic materials. While non-toxic supplies are important, they don't eliminate risks from consuming large quantities or choking on materials. Active supervision allows immediate intervention while still enabling beneficial sensory exploration. Consider edible art materials like yogurt finger painting, pudding, or food coloring mixed with yogurt for safer exploration. Non-toxic finger paints specifically designed for babies are alternatives, but require vigilant supervision. Age-appropriate tools and mess prevention are secondary to ingestion safety. The goal is balancing creative sensory exploration with safety through consistent, engaged adult monitoring and appropriate material selection.",
		difficulty: "medium",
		tags: ["play", "dev-6-18", "safety"]
	},
    {
		id: "baby_356",
		question: "What is the most effective play activity to support vocabulary development in babies aged 12-18 months?",
		options: ["Electronic learning tablets with vocabulary apps", "Narrating daily activities while engaging baby in simple tasks", "Playing classical music during quiet play time", "Providing multiple toys simultaneously for independent exploration"],
		correct: 1,
		explanation: "Narrating daily activities while engaging babies in simple, hands-on tasks is the most effective way to support vocabulary development in 12-18 month olds. This approach combines rich language input with meaningful context and natural turn-taking opportunities, allowing babies to connect words with actions and objects. Research consistently shows babies learn language best through responsive, interactive conversations rather than passive exposure. Daily routines like cooking, dressing, or cleaning provide perfect opportunities for repetitive language with real-world relevance. This method builds both receptive and expressive language skills while integrating motor development. Electronic devices lack the responsive interaction crucial for language learning, while background music and independent toy play provide insufficient linguistic input for optimal vocabulary growth.",
		difficulty: "medium",
		tags: ["play", "language"]
	},
	{
		id: "baby_357",
		question: "At what age do toddlers typically begin engaging in true imaginative play, such as pretending a block is a phone?",
		options: ["12-15 months", "18-24 months", "2-3 years", "3-4 years"],
		correct: 1,
		explanation: "True imaginative or symbolic play typically emerges between 18-24 months when toddlers develop the cognitive ability to use one object to represent another (like pretending a block is a phone). This represents a crucial milestone in abstract thinking and is closely linked to language development and theory of mind. Before 18 months, children primarily engage in functional play using objects for their intended purpose. Individual children may show early signs at 15 months or not fully develop these skills until closer to 24 months, which is normal. Parents can foster imaginative play by modeling simple pretend scenarios, providing open-ended materials like blocks and scarves, and following their child's lead during play. This foundation supports later academic learning, creativity, and social-emotional development.",
		difficulty: "medium",
		tags: ["play", "toddler"]
	},
	{
		id: "baby_358",
		question: "What is the typical maximum duration a healthy 18-month-old can engage in independent play without adult interaction?",
		options: ["2-5 minutes", "10-15 minutes", "20-30 minutes", "45-60 minutes"],
		correct: 1,
		explanation: "Most healthy 18-month-olds can engage in independent play for 10-15 minutes before seeking adult interaction, though individual variation is normal. This reflects typical attention span development and the natural need for frequent caregiver connection at this age. Factors affecting duration include the child's temperament, available toys, safety of the environment, and time of day. Toddlers need regular social interaction for emotional security and learning. Parents can gradually extend independent play by providing engaging, rotating toys, ensuring safety, and staying nearby but not actively engaged. Starting with shorter periods and building up helps develop this skill without causing frustration. Expecting significantly longer periods may lead to behavioral challenges as it exceeds normal developmental capabilities.",
		difficulty: "easy",
		tags: ["play", "toddler"]
	},
	{
		id: "baby_359",
		question: "What is the most important safety consideration when introducing sensory play materials to babies aged 9-12 months?",
		options: ["Ensuring materials are organic and chemical-free", "Keeping all materials at room temperature", "Verifying that materials are too large to pose a choking hazard", "Using only materials that can be completely sterilized"],
		correct: 2,
		explanation: "The most critical safety consideration for sensory play with 9-12 month olds is ensuring materials are too large to pose a choking hazard. Use the toilet paper roll test: if an object fits through a toilet paper tube (1.25 inches diameter), it's too small and dangerous. Babies this age have developed better hand coordination but still explore everything through mouthing, making choking the most immediate life-threatening risk. Always provide constant supervision during sensory play. While cleanliness matters and non-toxic materials are preferable, choking prevention takes absolute priority. Safe sensory materials include large wooden blocks, textured balls bigger than a tennis ball, and fabric squares. Temperature and sterilization, while considerations, are secondary to preventing choking hazards.",
		difficulty: "easy",
		tags: ["play", "safety", "dev-6-18"]
	},
	{
		id: "baby_360",
		question: "Which play activity most effectively promotes problem-solving skills in babies aged 8-10 months?",
		options: ["Listening to educational music", "Watching age-appropriate educational videos", "Playing with simple shape sorters and stacking rings", "Free exploration with multiple small toys"],
		correct: 2,
		explanation: "Simple shape sorters and stacking rings most effectively promote problem-solving skills in 8-10 month olds by engaging active trial-and-error learning, spatial reasoning, and cause-and-effect understanding. At this age, babies develop intentional problem-solving abilities and the hand-eye coordination needed for these manipulative tasks. These toys provide structured challenges that require figuring out how objects relate to each other and what happens with different approaches. Choose toys with large, safe pieces and provide supervision. Passive activities like music and videos don't engage the active cognitive processing needed for problem-solving development. Multiple small toys can overwhelm and pose choking hazards, while structured toys with clear goals better support emerging problem-solving skills and sustained attention.",
		difficulty: "medium",
		tags: ["play", "dev-6-18"]
	},
	{
		id: "baby_361",
		question: "What is the most appropriate play activity to support fine motor development in babies aged 6-8 months?",
		options: ["Providing toys with small buttons to press", "Offering large textured balls to grasp and transfer between hands", "Encouraging finger painting activities", "Giving puzzles with small pieces to manipulate"],
		correct: 1,
		explanation: "Large textured balls are ideal for supporting fine motor development in 6-8 month olds, promoting palmar grasp refinement, bilateral hand coordination, and object transfer skills that are crucial milestones at this age. The varied textures (bumpy, smooth, ridged) provide important sensory feedback that enhances motor learning and tactile discrimination. Babies this age are mastering whole-hand grasping and beginning to transfer objects between hands, skills that balls perfectly support. Choose balls larger than 2.5 inches diameter for safety. Small buttons and puzzle pieces pose choking hazards and require pincer grasp development that won't emerge until 9-12 months. Finger painting is developmentally inappropriate as babies this age explore everything orally and lack the motor control for intentional mark-making.",
		difficulty: "medium",
		tags: ["play", "dev-6-18"]
	},
	{
		id: "baby_362",
		question: "At what age do babies typically begin engaging in true back-and-forth social play games like peek-a-boo?",
		options: ["2-3 months", "4-6 months", "8-10 months", "12-15 months"],
		correct: 1,
		explanation: "Babies typically begin engaging in true back-and-forth social play games like peek-a-boo around 4-6 months when they develop crucial cognitive abilities including sustained attention, event anticipation, and understanding of turn-taking sequences. At this age, they show clear delight in interactive games and can maintain focus long enough for repeated exchanges. This milestone indicates developing social cognition and early theory of mind - understanding that others have intentions and can participate in shared activities. Earlier ages show social interest and smiling but lack the attention span and cognitive skills for sustained interactive play. These games also support language development through rhythm, timing, and shared attention that forms the foundation for later conversation skills.",
		difficulty: "easy",
		tags: ["play", "dev-0-6", "language"]
	},
	{
		id: "baby_363",
		question: "What is the most important environmental factor for supporting creative play in toddlers aged 15-24 months?",
		options: ["Having numerous electronic toys with lights and sounds", "Providing a designated quiet space with open-ended materials", "Ensuring constant adult direction and instruction", "Rotating toys every few days to maintain novelty"],
		correct: 1,
		explanation: "A designated quiet space with open-ended materials most effectively supports creative play in 15-24 month olds by reducing overstimulation and providing versatile materials that encourage imagination and multiple uses. Open-ended items like wooden blocks, fabric squares, containers, and natural materials allow toddlers to explore, experiment, and create without predetermined outcomes. This age group is developing independence, symbolic thinking, and creative problem-solving that flourishes with minimal adult direction. Electronic toys with predetermined responses limit creative thinking, while constant instruction stifles independent exploration. A calm environment supports sustained attention and deep play experiences. While toy rotation can maintain interest, the quality and openness of materials matter more than novelty for fostering creativity and cognitive development.",
		difficulty: "medium",
		tags: ["play", "toddler"]
	},
    {
		id: "baby_364",
		question: "What is the most effective way to promote hand-eye coordination development in babies aged 3-5 months?",
		options: ["Place colorful toys just out of reach to encourage stretching", "Provide lightweight rattles that make sound when moved", "Use only stationary toys attached to play mats", "Encourage reaching for moving objects like dangling toys"],
		correct: 3,
		explanation: "Hand-eye coordination develops when babies practice tracking and reaching for moving targets. Slowly moving objects like dangling toys or caregiver-controlled movements help babies coordinate their vision with arm movements more effectively than stationary objects. The movement should be slow and predictable - at the baby's eye level and within comfortable reach. This encourages successful grasping experiences that build confidence and motor skills. Placing toys out of reach causes frustration rather than development, while rattles are better for cause-and-effect learning. Start with gentle movements and celebrate successful reaches to encourage continued exploration and skill building.",
		difficulty: "medium",
		tags: ["play", "dev-0-6"]
	},
	{
		id: "baby_365",
		question: "At what age do babies typically begin engaging in deferred imitation (copying actions they observed earlier)?",
		options: ["6-8 months", "9-12 months", "12-15 months", "18-24 months"],
		correct: 2,
		explanation: "Deferred imitation - copying actions observed hours or days earlier - typically emerges around 12-15 months and represents a major cognitive milestone. Unlike immediate copying (which begins around 6-8 months), deferred imitation requires babies to remember and mentally replay actions, demonstrating developing memory and thinking skills. This ability is crucial for learning complex behaviors, social skills, and language development. You might notice your baby suddenly performing an action you demonstrated yesterday, showing they've stored and recalled that information. Parents can encourage this development by consistently demonstrating simple actions like clapping, waving, or stirring, then giving babies opportunities to practice these movements during later play sessions.",
		difficulty: "medium",
		tags: ["play", "dev-6-18"]
	},
	{
		id: "baby_366",
		question: "What is the optimal number of toys to offer during a single play session for babies aged 6-9 months?",
		options: ["1-2 toys to prevent overstimulation", "3-4 toys to provide variety", "5-6 toys to encourage exploration", "7+ toys to maximize learning opportunities"],
		correct: 0,
		explanation: "Research consistently shows that babies 6-9 months focus better and engage more deeply with 1-2 toys during play sessions. Too many options overwhelm their developing attention systems and lead to brief, superficial interactions rather than meaningful exploration. With fewer toys available, babies spend more time discovering different ways to use objects, developing sustained attention, and engaging in higher-quality play. This approach promotes deeper learning and creativity compared to scattered attention across multiple items. Parents should rotate toys every few days to maintain novelty while keeping the immediate selection simple and manageable for optimal developmental benefit.",
		difficulty: "easy",
		tags: ["play", "dev-0-6"]
	},
	{
		id: "baby_367",
		question: "What is the most important factor when selecting bath toys for babies aged 6-12 months?",
		options: ["Bright colors to stimulate visual development", "Multiple textures to enhance sensory exploration", "No holes or crevices that can harbor bacteria", "Educational features like numbers or letters"],
		correct: 2,
		explanation: "Safety is the top priority when choosing bath toys for babies. Toys with holes, crevices, or hollow spaces can trap water and become breeding grounds for dangerous bacteria, mold, and mildew. Even with regular cleaning, these hidden areas are nearly impossible to fully dry and sanitize, potentially causing respiratory infections, skin irritation, or illness if babies mouth contaminated toys. While colors and textures support development, they're secondary to preventing health risks. Choose solid, smooth toys without openings that can be easily cleaned and completely dried after each bath. Inspect toys regularly for cracks or damage, and replace them immediately if water-trapping areas develop.",
		difficulty: "easy",
		tags: ["play", "safety", "health"]
	},
	{
		id: "baby_368",
		question: "At what age do babies typically begin demonstrating tool use during play (using one object to affect another)?",
		options: ["6-8 months", "9-12 months", "12-15 months", "18-24 months"],
		correct: 1,
		explanation: "Tool use typically emerges around 9-12 months when babies begin intentionally using one object to manipulate another, such as using a wooden spoon to bang a pot, pushing a ball with a stick, or using a container to scoop water. This milestone demonstrates developing problem-solving skills, spatial reasoning, and understanding of cause-and-effect relationships. It's more advanced than simple object manipulation (6-8 months) but less complex than multi-step tool sequences (18+ months). This cognitive leap is foundational for later learning and creativity. Parents can encourage tool use by providing safe household items like measuring cups, wooden spoons, and simple containers that invite experimentation and discovery during supervised play.",
		difficulty: "medium",
		tags: ["play", "dev-6-18"]
	},
	{
		id: "baby_369",
		question: "What is the recommended approach for introducing musical instruments to babies aged 4-8 months?",
		options: ["Start with complex instruments like keyboards to maximize learning", "Provide only soft, quiet instruments to protect hearing", "Offer simple rhythm instruments like shakers and drums", "Wait until babies can sit independently before introducing instruments"],
		correct: 2,
		explanation: "Simple rhythm instruments like soft shakers, drums, and bells are perfectly matched to babies' 4-8 month developmental abilities. These instruments provide immediate cause-and-effect feedback while supporting hand-eye coordination and bilateral motor development. Unlike complex instruments that overwhelm developing skills, rhythm instruments allow successful exploration and musical discovery. Babies can use these instruments in any position - lying down, supported sitting, or during tummy time. The volume should be moderate rather than overly quiet to provide meaningful auditory stimulation that supports brain development, language skills, and early musical appreciation. Choose instruments without small parts and with smooth, safe surfaces for mouthing exploration.",
		difficulty: "easy",
		tags: ["play", "dev-0-6", "safety"]
	},
	{
		id: "baby_370",
		question: "What is the primary developmental benefit of supervised container play for babies aged 8-12 months?",
		options: ["Improving fine motor precision and dexterity", "Developing spatial reasoning and problem-solving skills", "Enhancing social interaction and sharing behaviors", "Supporting gross motor strength and coordination"],
		correct: 1,
		explanation: "Container play - putting objects in and taking them out of containers - primarily develops spatial reasoning and problem-solving skills crucial for later learning. Babies learn spatial concepts like inside/outside, full/empty, and how objects relate to spaces. They practice mental rotation to fit objects through openings and develop planning skills to accomplish their goals. This seemingly simple play builds foundations for math concepts, logical thinking, and executive function. While fine motor skills are certainly involved, the cognitive benefits are most significant at this developmental stage. Choose containers with smooth edges and objects too large to swallow, allowing safe exploration of these important spatial relationships.",
		difficulty: "medium",
		tags: ["play", "dev-6-18", "safety"]
	},
	{
		id: "baby_371",
		question: "At what age do babies typically begin engaging in functional play (using toys for their intended purpose)?",
		options: ["6-9 months", "9-12 months", "12-18 months", "18-24 months"],
		correct: 2,
		explanation: "Functional play typically begins around 12-18 months when babies start using toys for their intended purposes - pushing toy cars, brushing hair with toy brushes, or pretending to drink from empty cups. This represents a major cognitive leap from earlier exploratory play (mouthing, banging, throwing) to understanding how objects function in the real world. It requires symbolic thinking, memory, and growing awareness of social conventions. This milestone indicates developing language skills, social understanding, and readiness for more complex pretend play. Parents can encourage functional play by providing realistic toys and demonstrating their uses, then allowing babies to imitate and experiment independently.",
		difficulty: "medium",
		tags: ["play", "dev-6-18", "language"]
	}
];

// ============================================================================
// SIMPLIFIED CORE FUNCTIONS - Use these for new code
// ============================================================================

/**
 * Get questions by category tags (handles single tag or array of tags)
 * This is the main function you should use going forward
 */
export const getQuestionsByCategories = (categoryTags) => {
    // Handle single tag or array of tags
    if (!Array.isArray(categoryTags)) {
        categoryTags = [categoryTags];
    }
    
    // Return questions that match ANY of the provided tags
    return QUESTIONS.filter(question => 
        question.tags.some(tag => categoryTags.includes(tag))
    );
};

/**
 * Get random questions from specific categories
 * Simplified - always uses getQuestionsByCategories
 */
export const getRandomQuestions = (categoryTags, count = 10, difficulty = null) => {
    let availableQuestions;
    
    if (!categoryTags || categoryTags.length === 0) {
        availableQuestions = QUESTIONS;
    } else {
        availableQuestions = getQuestionsByCategories(categoryTags);
    }
    
    // Filter by difficulty if specified
    if (difficulty) {
        availableQuestions = availableQuestions.filter(q => q.difficulty === difficulty);
    }
    
    // Use QuizUtils to shuffle and return requested count
    return QuizUtils.selectRandomItems(availableQuestions, count);
};

// ============================================================================
// BACKWARD COMPATIBILITY - Keep these for existing code
// ============================================================================

/**
 * @deprecated Use getQuestionsByCategories instead
 * Kept for backward compatibility with existing quiz.js
 */
export const getQuestionsByCategory = (categoryTag) => {
    return getQuestionsByCategories([categoryTag]);
};

/**
 * Get all questions (for mixed category quiz)
 */
export const getAllQuestions = () => {
    return QUESTIONS;
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Get questions by difficulty level
 */
export const getQuestionsByDifficulty = (questions, difficulty) => {
    return questions.filter(q => q.difficulty === difficulty);
};

/**
 * Get question by ID
 */
export const getQuestionById = (questionId) => {
    return QUESTIONS.find(q => q.id === questionId) || null;
};

/**
 * Get total number of questions in specified categories
 */
export const getTotalQuestionCount = (categoryTags) => {
    if (!categoryTags || categoryTags.length === 0) {
        return QUESTIONS.length;
    }
    return getQuestionsByCategories(categoryTags).length;
};

/**
 * Get category statistics
 */
export const getCategoryStats = () => {
    const stats = {};
    
    Object.keys(CATEGORIES).forEach(categoryTag => {
        stats[categoryTag] = {
            name: CATEGORIES[categoryTag],
            questionCount: getQuestionsByCategories([categoryTag]).length
        };
    });
    
    return stats;
};

/**
 * Validate question structure
 */
export const validateQuestion = (question) => {
    const required = ['id', 'question', 'options', 'correct', 'explanation', 'tags'];
    
    // Check if all required fields exist
    for (let field of required) {
        if (!question.hasOwnProperty(field)) {
            return false;
        }
    }
    
    // Validate options array
    if (!Array.isArray(question.options) || question.options.length < 2) {
        return false;
    }
    
    // Validate correct answer index
    if (question.correct < 0 || question.correct >= question.options.length) {
        return false;
    }
    
    // Validate tags array
    if (!Array.isArray(question.tags) || question.tags.length === 0) {
        return false;
    }
    
    return true;
};

/**
 * Get statistics about the question database
 */
export const getStatistics = () => {
    const stats = {
        totalQuestions: QUESTIONS.length,
        categoryCounts: {},
        difficultyCounts: { easy: 0, medium: 0, hard: 0 }
    };
    
    // Count questions by category
    Object.keys(CATEGORIES).forEach(categoryTag => {
        stats.categoryCounts[categoryTag] = getQuestionsByCategories([categoryTag]).length;
    });
    
    // Count by difficulty
    QUESTIONS.forEach(q => {
        if (stats.difficultyCounts[q.difficulty] !== undefined) {
            stats.difficultyCounts[q.difficulty]++;
        }
    });
    
    return stats;
};

// ============================================================================
// EXPORT OBJECTS FOR COMPATIBILITY
// ============================================================================

// Backwards compatibility - export in the format expected by existing code
/*
export const QuizQuestions = {
    get science() { return getQuestionsByCategories(['health']); },
    get history() { return getQuestionsByCategories(['dev-0-6']); },
    get geography() { return getQuestionsByCategories(['safety']); },
    get literature() { return getQuestionsByCategories(['language']); },
    get sports() { return getQuestionsByCategories(['play']); },
    get technology() { return getQuestionsByCategories(['special']); },
    get arts() { return getQuestionsByCategories(['newborn']); }
};
*/

// Export question manager with simplified functions
export const QUESTION_MANAGER = {
    getQuestionsByCategories,
    getQuestionsByDifficulty,
    getRandomQuestions,
    getQuestionById,
    getTotalQuestionCount,
    validateQuestion,
    getStatistics
};