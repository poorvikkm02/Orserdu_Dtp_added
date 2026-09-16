"use client"
import React, { useContext, useRef, useState } from 'react'
import { ResponsiveContext } from '@/context/ResponsiveContext';
import Modal from '../modals/Modal';
import Footer from '../footer/Footer';

const ISIPOPUP  = () => {

    const isiRef = useRef(null);
    
   

    const { isMobile,navbarWidth,resetColor,changeColor } = useContext(ResponsiveContext);
     const [isModalOpen, setIsModalOpen] = useState(false);
    const [redirectUrl, setRedirectUrl] = useState('');

     // Use the visibility observer hook
    
// console.log("nav",navbarWidth,isMobile)
    const handleLinkClick = (e, url) => {
        e.preventDefault();
        setRedirectUrl(url);
        setIsModalOpen(true);
    };

    const handleContinue = () => {
        setIsModalOpen(false);
        window.open(redirectUrl, '_blank');
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
  
  return (
    <div  id="isi" className="  w-[100%]  mt-5 list-disc marker:text-list_color text-[18px] xl:text-[14px] xxl:text-[18px] font-[300] tracking-[0.09px]   leading-[20px]">
    <div className=" bg-white  ">
      <p className=" text-[1.1rem] xl:text-[16px] xxl:text-xl font-[700] mb-3  text-dark_green">IMPORTANT SAFETY INFORMATION AND INDICATION</p>
      <p className="font-[400] mb-2">
        ORSERDU may cause serious side effects, including:
      </p>
      <ul className="list-disc   ml-5 mb-4  ">
        <li>
           <span className='font-[400]'>Increased fat (lipid) levels in your blood (hypercholesterolemia
          and hypertriglyceridemia).</span> Your healthcare provider will do blood
          tests to check your lipid levels before and during your treatment
          with ORSERDU
        </li>
      </ul>
      <p className="font-[400] mb-2">
        Before taking ORSERDU, tell your healthcare provider about all your
        medical conditions, including if you:
      </p>
      <ul className="list-disc ml-5  mb-4 flex flex-col gap-2">
        <li>Have liver problems</li>
        <li>
          Are pregnant or plan to become pregnant. ORSERDU can harm your
          unborn baby
        </li>
        <ul className=" list-disc  ml-3 flex flex-col gap-2 [&>li]:list-[circle]">
          <p className="font-[400] mb-2 mt-2 m">
            Females who are able to become pregnant:
          </p>
          <li className="ml-5 " >
            Your healthcare provider may do a pregnancy test before you
            start treatment with ORSERDU
          </li>
          <li className="ml-5" >
            You should use effective (contraception) birth control during treatment with
            ORSERDU and for 1 week after the last dose
          </li>
          <li className="ml-5" >
            Tell your healthcare provider right away if you become pregnant
            or think you may be pregnant during treatment with ORSERDU
          </li>
          <p className="font-[400] mb-2 mt-2">
            Males with female partners who are able to become pregnant:
          </p>
          <li className="ml-5" >
            You should use effective (contraception) birth control during treatment with
            ORSERDU and for 1 week after the last dose
          </li>
        </ul>
      </ul>
      <ul className="list-disc  ml-5 mb-4 flex flex-col gap-2 text-start">
        <li>
          Are breastfeeding or plan to breastfeed. It is not known if
          ORSERDU passes into your breast milk. Do not breastfeed during
          treatment with ORSERDU and for 1 week after the last dose
        </li>
      </ul>
      <p className="mb-4">
        <span className="font-[400]  ">Tell your healthcare provider about all the medicines you take,</span>
        {" "}including prescription and over-the-counter medicines, vitamins, and
        herbal supplements. ORSERDU and other medicines may affect each
        other causing side effects. Know the medicines you take. Keep a list
        of them to show your healthcare provider or pharmacist when you get
        a new medicine.
      </p>
      <p className="font-[400] mb-2">
        The most common side effects of ORSERDU include (≥10% of patients) :
      </p>
      <div className="grid xl:grid-cols-2  grid-cols-1 xl:gap-1 ">
      <ul className="list-disc  leading-[18px] xl:leading-[16px] grid grid-cols-1 ml-5 xl:gap-1 xl:mb-4">
        <li>Muscle and joint (musculoskeletal) pain</li>
        <li>Nausea
          
        </li>
        <li>Increased cholesterol and triglyceride levels in your blood</li>
        <li>Increased liver function tests</li>
        <li>Tiredness</li>
        <li>Decreased red blood cell counts</li>
        <li>Vomiting</li>
        <li>Decreased salt (sodium) levels in your blood</li>
        
      </ul>
      <ul className="list-disc leading-[18px] xl:leading-[16px]  grid grid-cols-1 ml-5 xl:gap-1 mb-4">
        
        <li>Increased kidney function test</li>
        <li>Decreased appetite</li>
        <li>Diarrhea</li>
        <li>Headache</li>
        <li>Constipation</li>
        <li>Stomach-area (abdominal) pain</li>
        <li>Hot flush</li>
        <li>Indigestion or heartburn</li></ul>
        </div>
      <p className="mb-4">
        Your healthcare provider may decrease your dose, temporarily stop,
        or completely stop treatment with ORSERDU, if you develop certain
        side effects.
      </p>
      <p className="font-[300] mb-4">
        ORSERDU may affect fertility in males and in females who are able to
        become pregnant. Talk to your healthcare provider if this is a
        concern for you.
      </p>
      <p className="mb-4">
        ORSERDU is available as 345 mg and 86 mg tablets.
      </p>
      <p className="mb-4">
                    These are not all the possible side effects of ORSERDU. Call your
                    doctor for medical advice about side effects. You may report side
                     effects to the FDA at <span className='text-nowrap'>1-800-FDA-1088</span> or visit {""}
                    <a
                        className="text-black  underline"
                        href="http://www.fda.gov/medwatch"
                        target="_blank"
                        onClick={(e) => handleLinkClick(e, "http://www.fda.gov/medwatch")}
                    >
                         www.fda.gov/medwatch
                    </a>.
                </p>
      <p className="text-[1.125rem] xl:text-[16px] xxl:text-xl font-[400] mb-4 text-dark_green">INDICATION</p>
      <p className="mb-4">
        ORSERDU (elacestrant) is a prescription medicine to treat women who
        have gone through menopause and adult men with estrogen receptor
        (ER)-positive, human epidermal growth factor receptor 2
        (HER2)-negative, <i className='font-[300]'>ESR1</i>-mutated advanced breast cancer or breast
        cancer that has spread to other parts of the body (metastatic),{" "}
        <strong>and</strong> whose disease has progressed after endocrine
        therapy.
      </p>
      <p className="mb-4">
        Your healthcare provider will perform a test to make sure that
        ORSERDU is right for you.
      </p>
      <p className="mb-4">
        It is not known if ORSERDU is safe and effective in children.
      </p>
      <p className="font-[400] text-[18px] mt-4">
       <span className="mt-3">
 <span> Please see </span>
  <a href="https://d218mh3sadleh5.cloudfront.net/Clients/Stemline/Orserdu/doc/ORSERDU_Important_Facts.pdf" target="_blank" className="underline">
     Important Facts 
  </a> 
<span> about ORSERDU.</span>
</span>

      </p>
      <p className="font-light text-[18px] mt-4">
       Intended for US residents only.
 
      </p>
    </div>

    
               <Modal
                isOpen={isModalOpen}
                onClose={handleCancel}
                onContinue={handleContinue}
            />

  </div>
  )
}

export default ISIPOPUP 