import React from 'react';

interface LabValuesProps {
    showSI: boolean;
    currentTab: number;
  }

export function LabValues(props: LabValuesProps) {
    const { showSI, currentTab } = props;
    
    return(
    <div id="labBody" className='overflow-scroll text-left px-4 h-dvh pb-40'>
                {currentTab == 1 && <div>
                    <table>
                        <thead>
                            <tr>
                                <th className="labName">Serum</th>
                                <th className="refRange">Reference Range</th>
                                <th className={`SI ${showSI ? '' : 'hidden'}`}>SI Reference</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Alanine aminotransferase (ALT)</td>
                                <td className="refRange">10–40 U/L</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>10–40 U/L</td>
                            </tr>

                            <tr>
                                
                                <td>Aspartate aminotransferase (AST)</td>
                                <td className="refRange">12–38 U/L</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>12–38 U/L</td>
                            </tr>
                            <tr>
                                
                                <td>Alkaline phosphatase</td>
                                <td className="refRange">25–100 U/L</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>25–100 U/L</td>
                            </tr>					
                            <tr>
                                
                                <td>Amylase</td>
                                <td className="refRange">25–125 U/L</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>25–125 U/L</td>
                            </tr>
                            
                            <tr>
                                
                                <td>Bilirubin, total // direct</td>
                                <td className="refRange">0.1–1.0 mg/dL // 0.0–0.3 mg/dL</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>2–17 µmol/L // 0–5 µmol/L</td>
                            </tr>
                            <tr>
                                
                                <td>Calcium</td>
                                <td className="refRange">8.4–10.2 mg/dL</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>2.1–2.6 mmol/L</td>
                            </tr>
                            <tr>
                                
                                <th colSpan={3}>Cholesterol</th>
                            </tr>
                            <tr className="group">
                                
                                <td> Total</td>
                                <td className="refRange">Normal: &lt;200 mg/dL // High: &gt;240 mg/dL</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>&lt;5.2 mmol/L // &gt;6.2 mmol/L</td>
                            </tr>
                            <tr className="group">
                                
                                <td> HDL</td>
                                <td className="refRange">40–60 mg/dL</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>1.0–1.6 mmol/L</td>
                            </tr>
                            <tr className="group">
                                
                                <td> LDL</td>
                                <td className="refRange">&lt;160 mg/dL</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>&lt;4.2 mmol/L</td>
                            </tr>
                            <tr>
                                
                                <td>Triglycerides</td>
                                <td className="refRange">Normal: &lt;150 mg/dL // Borderline: 151–199 mg/dL</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>&lt;1.70 mmol/L // 1.71–2.25 mmol/L</td>
                            </tr>
                            <tr>
                                <td rowSpan={2}>Cortisol</td>
                                <td className="refRange">0800 h: 5–23 µg/dL // 1600 h: 3–15 µg/dL</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>138–635 nmol/L // 82–413 nmol/L</td>
                            </tr>
                            <tr className="group">
                                <td className="refRange">2000 h: &lt;50% of 0800 h</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>Fraction of 0800 h: &lt;0.50</td>
                            </tr>
                            
                            <tr>
                                <td rowSpan={2}>Creatine kinase</td>
                                <td className="refRange">Male: 25–90 U/L</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>25–90 U/L</td>
                            </tr>
                            <tr className="group">
                                <td className="refRange">Female: 10–70 U/L</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>10–70 U/L</td>
                            </tr>
                            <tr>
                                
                                <td>Creatinine</td>
                                <td className="refRange">0.6–1.2 mg/dL</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>53–106 µmol/L</td>
                            </tr>		
                            <tr>
                                
                                <td>Urea nitrogen</td>
                                <td className="refRange">7–18 mg/dL</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>2.5–6.4 mmol/L</td>
                            </tr>
                            <tr>
                                <td rowSpan={2}>Creatinine clearance</td>
                                <td className="refRange">Male: 97–137 mL/min</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>97–137 mL/min</td>
                            </tr>
                            <tr className="group">
                                <td className="refRange">Female: 88–128 mL/min</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>88–128 mL/min</td>
                            </tr>
                            <tr>
                                
                                <th colSpan={3}>Electrolytes, serum</th>
                            </tr>
                            <tr className="group">
                                
                                <td> Sodium (Na<sup>+</sup>)</td>
                                <td className="refRange">136–146 mEq/L</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>136–146 mmol/L</td>
                            </tr>
                            <tr className="group">
                                
                                <td> Potassium (K<sup>+</sup>)</td>
                                <td className="refRange">3.5–5.0 mEq/L</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>3.5–5.0 mmol/L</td>
                            </tr>
                            <tr className="group">
                                
                                <td> Chloride (Cl<sup>−</sup>)</td>
                                <td className="refRange">95–105 mEq/L</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>95–105 mmol/L</td>
                            </tr>
                            <tr className="group">
                                
                                <td> Bicarbonate (HCO<sub>3</sub><sup>−</sup>)</td>
                                <td className="refRange">22–28 mEq/L</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>22–28 mmol/L</td>
                            </tr>
                            <tr className="group">
                                
                                <td> Magnesium (Mg<sup>2+</sup>)</td>
                                <td className="refRange">1.5–2.0 mg/dL</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>0.75–1.0 mmol/L</td>
                            </tr>
                            <tr>
                                <td rowSpan={2}>Ferritin</td>
                                <td className="refRange">Male: 20–250 ng/mL</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>20–250 µg/L</td>
                            </tr>
                            <tr className="group">
                                <td className="refRange">Female: 10–120 ng/mL</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>10–120 µg/L</td>
                            </tr>	
                            <tr>
                                <td rowSpan={4}>Follicle-stimulating hormone</td>
                                <td className="refRange">Male: 4–25 mIU/mL</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>4–25 U/L</td>
                            </tr>
                            <tr className="group">
                                <td className="refRange">Female: premenopause 4–30 mIU/mL</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>4–30 U/L</td>
                            </tr>
                            <tr className="group">
                                <td className="refRange"> midcycle peak 10–90 mIU/mL</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>10–90 U/L</td>
                            </tr>
                            <tr className="group">
                                <td className="refRange"> postmenopause 40–250 mIU/mL</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>40–250 U/L</td>
                            </tr>
                            <tr>
                                <td rowSpan={2}>Glucose</td>
                                <td className="refRange">Fasting: 70–100 mg/dL</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>3.8–5.6 mmol/L</td>
                            </tr>
                            <tr className="group">
                                <td className="refRange">Random, non-fasting: &lt;140 mg/dL</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>&lt;7.77 mmol/L</td>
                            </tr>
                            <tr>
                                <td rowSpan={2}>Growth hormone - arginine stimulation</td>
                                <td className="refRange">Fasting: &lt;5 ng/mL</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>&lt;5 µg/L</td>
                            </tr>
                            <tr className="group">
                                <td className="refRange">Provocative stimuli: &gt;7 ng/mL</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>&gt;7 µg/L</td>
                            </tr>
                            <tr>
                                <td rowSpan={2}>Iron</td>
                                <td className="refRange">Male: 65–175 µg/dL</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>11.6–31.3 µmol/L</td>
                            </tr>
                            <tr className="group">
                                <td className="refRange">Female: 50–170 µg/dL</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>9.0–30.4 µmol/L</td>
                            </tr>	
                            <tr>
                                <td>Total iron-binding capacity</td>
                                <td className="refRange">250–400 µg/dL</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>44.8–71.6 µmol/L</td>
                            </tr>
                            <tr>
                                <td>Transferrin</td>
                                <td className="refRange">200–360 mg/dL</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>2.0–3.6 g/L</td>
                            </tr>
                            <tr>
                                <td>Lactate dehydrogenase</td>
                                <td className="refRange">45–200 U/L</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>45–200 U/L</td>
                            </tr>
                            <tr>
                                <td>Lipase</td>
                                <td className="refRange">13–60 U/L</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>13–60 U/L</td>
                            </tr>
                            <tr>
                                <td rowSpan={4}>Luteinizing hormone</td>
                                <td className="refRange">Male: 6–23 mIU/mL</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>6–23 U/L</td>
                            </tr>
                            <tr className="group">
                                <td className="refRange">Female: follicular phase 5–30 mIU/mL</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>5–30 IU/L</td>
                            </tr>
                            <tr className="group">
                                <td className="refRange"> midcycle 75–150 mIU/mL</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>75–150 IU/L</td>
                            </tr>
                            <tr className="group">
                                <td className="refRange"> postmenopause 30–200 mIU/mL</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>30–200 IU/L</td>
                            </tr>
                            <tr>
                                
                                <td>Osmolality</td>
                                <td className="refRange">275–295 mOsmol/kg H<sub>2</sub>O</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>275–295 mOsmol/kg H<sub>2</sub>O</td>
                            </tr>
                            <tr>
                                
                                <td>Intact parathyroid hormone (PTH)</td>
                                <td className="refRange">10–60 pg/mL</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>10–60 ng/L</td>
                            </tr>
                            <tr>
                                
                                <td>Phosphorus (inorganic)</td>
                                <td className="refRange">3.0–4.5 mg/dL</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>1.0–1.5 mmol/L</td>
                            </tr>
                            <tr>
                                <td rowSpan={2} >Prolactin (hPRL)</td>
                                <td className="refRange">Male: &lt;17 ng/mL</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>&lt;17 µg/L</td>
                            </tr>
                            <tr className="group">
                                <td className="refRange">Female: &lt;25 ng/mL</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>&lt;25 µg/L</td>
                            </tr>	<tr>
                                
                                <th colSpan={3}>Proteins</th>
                            </tr>
                            <tr className="group">
                                
                                <td> Total</td>
                                <td className="refRange">6.0–7.8 g/dL</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>60–78 g/L</td>
                            </tr>
                            <tr className="group">
                                
                                <td> Albumin</td>
                                <td className="refRange">3.5–5.5 g/dL</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>35–55 g/L</td>
                            </tr>
                            <tr className="group">
                                
                                <td> Globulin</td>
                                <td className="refRange">2.3–3.5 g/dL</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>23–35 g/L</td>
                            </tr>
                            <tr>
                                <td>Troponin I</td>
                                <td className="refRange">≤0.04 ng/mL</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>≤0.04 µg/L</td>
                            </tr>
                            <tr>
                                
                                <td>TSH</td>
                                <td className="refRange">0.4–4.0 μU/mL</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>0.4–4.0 mIU/L</td>
                            </tr>
                            <tr>
                                
                                <td>Thyroidal iodine (<sup>123</sup>I) uptake</td>
                                <td className="refRange">8%–30% of administered dose/24 h</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>0.08–0.30/24 h</td>
                            </tr>
                            <tr>
                                
                                <td>Thyroxine (T<sub>4</sub>)</td>
                                <td className="refRange">5–12 µg/dL</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>64–155 nmol/L</td>
                            </tr>
                            <tr>
                                
                                <td>Free T<sub>4</sub></td>
                                <td className="refRange">0.9–1.7 ng/dL</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>12.0–21.9 pmol/L</td>
                            </tr>
                            <tr>
                                
                                <td>Triiodothyronine (T<sub>3</sub>) (RIA)</td>
                                <td className="refRange">100–200 ng/dL</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>1.5–3.1 nmol/L</td>
                            </tr>
                            <tr>
                                
                                <td>Triiodothyronine (T<sub>3</sub>) resin uptake</td>
                                <td className="refRange">25%–35%</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>0.25–0.35</td>
                            </tr>
                            <tr>
                                
                                <td>Uric acid</td>
                                <td className="refRange">3.0–8.2 mg/dL</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>0.18–0.48 mmol/L</td>
                            </tr>
                            <tr>
                                
                                <th colSpan={3}>Immunoglobulins</th>
                            </tr>
                            <tr className="group">
                                
                                <td>IgA</td>
                                <td className="refRange">76–390 mg/dL</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>0.76–3.90 g/L</td>
                            </tr>
                            <tr className="group">
                                
                                <td>IgE</td>
                                <td className="refRange">0–380 IU/mL</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>0–380 kIU/L</td>
                            </tr>
                            <tr className="group">
                                
                                <td>IgG</td>
                                <td className="refRange">650–1500 mg/dL</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>6.5–15.0 g/L</td>
                            </tr>
                            <tr className="group">
                                
                                <td>IgM</td>
                                <td className="refRange">50–300 mg/dL</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>0.5–3.0 g/L</td>
                            </tr>
                            <tr>
                                <th colSpan={3}>Gases, arterial blood (room air)</th>
                            </tr>
                            <tr className="group">
                                
                                <td>pH</td>
                                <td className="refRange">7.35–7.45</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>[H<sup>+</sup>] 36–44 nmol/L</td>
                            </tr>
                            <tr className="group">
                                
                                <td>Pco<sub>2</sub></td>
                                <td className="refRange">33–45 mm Hg</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>4.4–5.9 kPa</td>
                            </tr>
                            <tr className="group">
                                
                                <td>Po<sub>2</sub></td>
                                <td className="refRange">75–105 mm Hg</td>
                                <td className={`SI ${showSI ? '' : 'hidden'}`}>10.0–14.0 kPa</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                }


    {currentTab=== 2 && <div>
                <table>
                    <thead>
                        <tr>
                            <th className="labName">Cerebrospinal Fluid</th>
                            <th className="refRange">Reference Range</th>
                            <th className={`SI ${showSI ? '' : 'hidden'}`}>SI Reference</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Cell count</td>
                            <td className="refRange">0–5/mm<sup>3</sup></td>
                            <td className={`SI ${showSI ? '' : 'hidden'}`}>0–5 x 10<sup>6</sup>/L</td>
                        </tr>
                        <tr>
                            <td>Chloride</td>
                            <td className="refRange">118–132 mEq/L</td>
                            <td className={`SI ${showSI ? '' : 'hidden'}`}>118–132 mmol/L</td>
                        </tr>
                        <tr>
                            <td>Gamma globulin</td>
                            <td className="refRange">3%–12% total proteins</td>
                            <td className={`SI ${showSI ? '' : 'hidden'}`}>0.03–0.12</td>
                        </tr>
                        <tr>
                            <td>Glucose</td>
                            <td className="refRange">40–70 mg/dL</td>
                            <td className={`SI ${showSI ? '' : 'hidden'}`}>2.2–3.9 mmol/L</td>
                        </tr>
                        <tr>
                            <td>Pressure</td>
                            <td className="refRange">70–180 mm H<sub>2</sub>O</td>
                            <td className={`SI ${showSI ? '' : 'hidden'}`}>70–180 mm H<sub>2</sub>O</td>
                        </tr>
                        <tr>
                            <td>Proteins, total</td>
                            <td className="refRange">&lt;40 mg/dL</td>
                            <td className={`SI ${showSI ? '' : 'hidden'}`}>&lt;0.40 g/L</td>
                        </tr>
                    </tbody>
                </table>
            </div>}
    {currentTab==3 && <div>
                <table>
                    <thead>
                        <tr>
                            <th className="labName">Hematologic</th>
                            <th className="refRange">Reference Range</th>
                            <th className={`SI ${showSI ? '' : 'hidden'}`}>SI Reference</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={2}>Erythrocyte count (RBC)</td>
                            <td className="refRange">Male: 4.3–5.9 million/mm<sup>3</sup></td>
                            <td className={`SI ${showSI ? '' : 'hidden'}`}>4.3–5.9 x 10<sup>12</sup>/L</td>
                        </tr>
                        <tr className="group">
                            <td className="refRange">Female: 3.5–5.5 million/mm<sup>3</sup></td>
                            <td className={`SI ${showSI ? '' : 'hidden'}`}>3.5–5.5 x 10<sup>12</sup>/L</td>
                        </tr>
                        <tr>
                            <td rowSpan={2}>Erythrocyte sedimentation rate (Westergren)</td>
                            <td className="refRange">Male: 0–15 mm/h</td>
                            <td className="SI group">0–15 mm/h</td>
                        </tr>
                        <tr className="group">
                            <td className="refRange">Female: 0–20 mm/h</td>
                            <td className={`SI ${showSI ? '' : 'hidden'}`}>0–20 mm/h</td>
                        </tr>
                        <tr>
                            <td rowSpan={2}>Hematocrit</td>
                            <td className="refRange">Male: 41%–53%</td>
                            <td className={`SI ${showSI ? '' : 'hidden'}`}>0.41–0.53</td>
                        </tr>
                        <tr className="group">
                            <td className="refRange">Female: 36%–46%</td>
                            <td className={`SI ${showSI ? '' : 'hidden'}`}>0.36–0.46</td>
                        </tr>
                        <tr>
                            <td rowSpan={2}>Hemoglobin, blood</td>
                            <td className="refRange">Male: 13.5–17.5 g/dL</td>
                            <td className={`SI ${showSI ? '' : 'hidden'}`}>135–175 g/L</td>
                        </tr>
                        <tr className="group">
                            <td className="refRange">Female: 12.0–16.0 g/dL</td>
                            <td className={`SI ${showSI ? '' : 'hidden'}`}>120–160 g/L</td>
                        </tr>
                        <tr>
                            <td>Hemoglobin A<sub>1c</sub></td>
                            <td className="refRange">≤6%</td>
                            <td className={`SI ${showSI ? '' : 'hidden'}`}>≤42 mmol/mol</td>
                        </tr>
                        <tr>
                            <td>Leukocyte count (WBC)</td>
                            <td className="refRange">4500–11,000/mm<sup>3</sup></td>
                            <td className={`SI ${showSI ? '' : 'hidden'}`}>4.5–11.0 x 10<sup>9</sup>/L</td>
                        </tr>
                        <tr>
                            <td>Neutrophils, segmented</td>
                            <td className="refRange">54%–62%</td>
                            <td className={`SI ${showSI ? '' : 'hidden'}`}>0.54–0.62</td>
                        </tr>
                        <tr>
                            <td>Neutrophils, bands</td>
                            <td className="refRange">3%–5%</td>
                            <td className={`SI ${showSI ? '' : 'hidden'}`}>0.03–0.05</td>
                        </tr>
                        <tr>
                            <td>Eosinophils</td>
                            <td className="refRange">1%–3%</td>
                            <td className={`SI ${showSI ? '' : 'hidden'}`}>0.01–0.03</td>
                        </tr>
                        <tr>
                            <td>Basophils</td>
                            <td className="refRange">0%–0.75%</td>
                            <td className={`SI ${showSI ? '' : 'hidden'}`}>0.00–0.0075</td>
                        </tr>
                        <tr>
                            <td>Lymphocytes</td>
                            <td className="refRange">25%–33%</td>
                            <td className={`SI ${showSI ? '' : 'hidden'}`}>0.25–0.33</td>
                        </tr>
                        <tr>
                            <td>Monocytes</td>
                            <td className="refRange">3%–7%</td>
                            <td className={`SI ${showSI ? '' : 'hidden'}`}>0.03–0.07</td>
                        </tr>
                        <tr>
                            <td>CD4+ T-lymphocyte count</td>
                            <td className="refRange">≥500/mm<sup>3</sup></td>
                            <td className={`SI ${showSI ? '' : 'hidden'}`}>≥0.5 x 10<sup>9</sup>/L</td>
                        </tr>
                        <tr>
                            <td>Platelet count</td>
                            <td className="refRange">150,000–400,000/mm<sup>3</sup></td>
                            <td className={`SI ${showSI ? '' : 'hidden'}`}>150–400 x 10<sup>9</sup>/L</td>
                        </tr>
                        <tr>
                            <td>Reticulocyte count</td>
                            <td className="refRange">0.5%–1.5%</td>
                            <td className={`SI ${showSI ? '' : 'hidden'}`}>0.005–0.015</td>
                        </tr>
                        <tr>
                            <td>D-Dimer</td>
                            <td className="refRange">≤250 ng/mL</td>
                            <td className={`SI ${showSI ? '' : 'hidden'}`}>≤1.4 nmol/L</td>
                        </tr>
                        <tr>
                            <td>Partial thromboplastin time (aPTT) (activated)</td>
                            <td className="refRange">25–40 seconds</td>
                            <td className={`SI ${showSI ? '' : 'hidden'}`}>25–40 seconds</td>
                        </tr>
                        <tr>
                            <td>Prothrombin time (PT)</td>
                            <td className="refRange">11–15 seconds</td>
                            <td className={`SI ${showSI ? '' : 'hidden'}`}>11–15 seconds</td>
                        </tr>
                        <tr>
                            <td>Mean corpuscular hemoglobin (MCH)</td>
                            <td className="refRange">25–35 pg/cell</td>
                            <td className={`SI ${showSI ? '' : 'hidden'}`}>0.39–0.54 fmol/cell</td>
                        </tr>
                        <tr>
                            <td>Mean corpuscular hemoglobin concentration (MCHC)</td>
                            <td className="refRange">31%–36% Hb/cell</td>
                            <td className={`SI ${showSI ? '' : 'hidden'}`}>4.8–5.6 mmol Hb/L</td>
                        </tr>
                        <tr>
                            <td>Mean corpuscular volume (MCV)</td>
                            <td className="refRange">80–100 µm<sup>3</sup></td>
                            <td className={`SI ${showSI ? '' : 'hidden'}`}>80–100 fL</td>
                        </tr>
                        <tr>
                            <th colSpan={3}>Volume</th>
                        </tr>
                        <tr className="group">
                            <td rowSpan={2}>Plasma</td>
                            <td className="refRange">Male: 25–43 mL/kg</td>
                            <td className={`SI ${showSI ? '' : 'hidden'}`}>0.025–0.043 L/kg</td>
                        </tr>
                        <tr className="group">
                            <td className="refRange">Female: 28–45 mL/kg</td>
                            <td className={`SI ${showSI ? '' : 'hidden'}`}>0.028–0.045 L/kg</td>
                        </tr>
                        <tr className="group">
                            <td rowSpan={2}>Red cell</td>
                            <td className="refRange">Male: 20–36 mL/kg</td>
                            <td className={`SI ${showSI ? '' : 'hidden'}`}>0.020–0.036 L/kg</td>
                        </tr>
                        <tr className="group">
                            <td className="refRange">Female: 19–31 mL/kg</td>
                            <td className={`SI ${showSI ? '' : 'hidden'}`}>0.019–0.031 L/kg</td>
                        </tr>
                    </tbody>
                </table>
            </div>}
    {currentTab==4 && <div>
                <table>
                    <thead>
                        <tr>
                            <th className="labName"><br />Urine</th>
                            <th className="refRange"><br />Reference Range</th>
                            <th className={`SI ${showSI ? '' : 'hidden'}`}><br />SI Reference</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Calcium</td>
                            <td className="refRange">100–300 mg/24 h</td>
                            <td className={`SI ${showSI ? '' : 'hidden'}`}>2.5–7.5 mmol/24 h</td>
                        </tr>
                        <tr>
                            <td>Osmolality</td>
                            <td className="refRange">50–1200 mOsmol/kg H<sub>2</sub>O</td>
                            <td className={`SI ${showSI ? '' : 'hidden'}`}>50–1200 mOsmol/kg H<sub>2</sub>O</td>
                        </tr>
                        <tr>
                            <td>Oxalate</td>
                            <td className="refRange">8–40 µg/mL</td>
                            <td className={`SI ${showSI ? '' : 'hidden'}`}>90–445 µmol/L</td>
                        </tr>
                        <tr>
                            <td>Proteins, total</td>
                            <td className="refRange">&lt;150 mg/24 h</td>
                            <td className={`SI ${showSI ? '' : 'hidden'}`}>&lt;0.15 g/24 h</td>
                        </tr>
                        <tr>
                            <td rowSpan={2}>17-Hydroxycorticosteroids</td>
                            <td className="refRange">Male: 3.0–10.0 mg/24 h</td>
                            <td className={`SI ${showSI ? '' : 'hidden'}`}>8.2–27.6 µmol/24 h</td>
                        </tr>
                        <tr className="group">
                            <td className="refRange">Female: 2.0–8.0 mg/24 h</td>
                            <td className={`SI ${showSI ? '' : 'hidden'}`}>5.5–22.0 µmol/24 h</td>
                        </tr>
                        <tr>
                            <td rowSpan={2}>17-Ketosteroids, total</td>
                            <td className="refRange">Male: 8–20 mg/24 h</td>
                            <td className={`SI ${showSI ? '' : 'hidden'}`}>28–70 µmol/24 h</td>
                        </tr>
                        <tr className="group">
                            <td className="refRange">Female: 6–15 mg/24 h</td>
                            <td className={`SI ${showSI ? '' : 'hidden'}`}>21–52 µmol/24 h</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th className="labName"><br />Body Mass Index (BMI)</th>
                            <td colSpan={2}><br />Adult: 19–25 kg/m<sup>2</sup></td>
                        </tr>
                    </thead>
                </table>		
            </div>}
    </div>)
}

export default LabValues;