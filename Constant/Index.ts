import React, { useEffect, useState } from 'react';




export const manufacturers = [
    "AAA PHARMA TRADE PVT LTD",
"ACTIVE HEALTHCARE",
"AGLOWMED DRUGS PVT LTD",
"AGLOWMED LTD",
"AGLOWMED PHARMACEUTICALS LTD",
"AGRON REMEDIES",
"ALARIUS HEALTHCARE",
"ALKA DISTRIBUTORS",
"ALKA PHARMA",
"ALKA PHARMACEUTICALS",
"ALDE MEDI IMPEX",
"ALDE MEDI IMPEX LTD",
"ALVIZIA HEALTHCARE PVT LTD",
"AMBROMIDE PHARMA PVT LTD",
"AMBROSIA PHARMA",
"AMBROSIAPHARMA",
"AMPLEC HEALTHCARE PVT LTD",
"AMRIT REMEDIES PVT LTD",
"AMSTER HEALTHCARE",
"AMSTER HEALTHCARE PVT LTD",
"AMY LIFESCIENCES",
"ANGLO FRENCH DRUGS & INDUSTRIES LTD",
"ANISUM LIFESCIENCES",
"APKAVIT LIFE SCIENCE",
"APKAVIT LIFESCIENCES",
"APKAVIT LIFESCIENCES PVT LTD",
"ARCHIES LTD",
"ARISTO PHARMACEUTICALS LTD",
"ARISTO PHARMACEUTICALS PVT LTD",
"BIOCON LTD",
"BIOCRROSS CHEM LLP",
"BIOSAFE FORMULATIONS",
"BLISS CHOCOLATES INDIA PVT LTD",
"BLUEMATIC LIFE SCIENCES",
"B BRAUN MEDICAL INDIA PVT LTD",
"BREATH E EASY CONSULTANTS PVT LTD",
"CAPLATE INDIA LTD",
"CAPTAB BIOTEC",
"CARECROFT MEDIC PVT LTD",
"CIAN HEALTH CARE PVT LTD",
"CIPLA LTD",
"COMEX PHARMA",
"CONCORD DRUGS LTD",
"CONCORD MEDIPHARMA PVT LTD",
"CORYDAL PHARMACEUTICALS",
"CRONUS BIOTECH LTD",
"D R JOHNS LAB PHARMA",
"DR. JOHN",
"DR. JOHNS LABORATORIES PVT LTD",
"ETERNAL HEALTHCARE",
"EXMED HEALTH CARE",
"FDC LTD",
"FEDLEY HEALTHCARE PVT LTD",
"FRANK MEDILINK",
"FRANK MEDILINK PHARMA",
"GLOBUS REMEDIES LTD",
"GOLDLINE",
"GOLD LINE",
"HEALING PHARMA",
"HEALTH BIOMED PHARMA",
"HOLY LIFESCIENCES",
"HUMAN BIOLIFE INDIA PVT LTD",
"ICE LIFESCIENCES",
"INFINATOR PVT LTD",
"INVISION MEDI SCIENCES PVT LTD",
"JAWA PHARMACEUTICAL PVT LTD",
"LEMARK REMEDIES",
"LEXARO HEALTHCARE",
"LIFE MEDICARE & BIOTECH PVT LTD",
"LIFECOM PHARMACEUTICALS PVT LTD",
"LOCO HEALTHCARE PVT LTD",
"MACLEODS PHARMACEUTICALS PVT LTD",
"MAKEWAY FORMULATIONS PVT LTD",
"MATHIS PHARMA",
"MAX INDIA LTD",
"MAX PHARMA",
"MAX PHARMA PVT LTD",
"MDC PHARMACEUTICALS PVT LTD",
"MEDIAL PHARMA LTD",
"MEDIBOON PHARMA PVT LTD",
"MEDIMAX PHARMA",
"MEDI BIOTECH",
"MEDI BIOTECH PVT LTD",
"MEDETHICS PHARMA",
"MICRO LABS",
"MICRO LABS LTD",
"MOREPEN LABORATORIES",
"MOREPEN LABORATORIES LTD",
"MOREPEN LABORTIERES LTD",
"MOTHER REMEDIES",
"MPC PHARMACEUTICALS",
"NUKIND HEALTHCARE PVT LTD",
"OZENIUS PHARMACEUTICALS",
"PARADIGM HEALTHCARE",
"PENRYTH LABS PVT LTD",
"PHARMA DRUGS & CHEMICALS",
"PRAY HEALTHCARE",
"PRISTINE ORGANICS PVT LTD",
"PROHEALTH VITAMINS PVT LTD",
"RHINE BIOGENICS PVT LTD",
"RNGALLA FAMILY PVT LTD",
"ROLSMED PHARMA",
"ROSMET PHARMACEUTICALS",
"SANATIO PHARMACEUTICALS",
"SANATIO PHARMACEUTICALS PVT LTD",
"SAPSON PHARMA",
"SARTHI LIFE SCIENCES",
"SELEXIA BIOTECH PVT LTD",
"SENATE LABORATORIES",
"SERENE LIFESCIENCE",
"SHADYE LYNN REMEDIES",
"SHALMAN PHARMA PVT LTD",
"SHREE RUDRAYA HEALTHCARE",
"SLASH LIFE VISION",
"SLASH LIFEVISION",
"SOOTHE HEALTHCARE PVT LTD",
"SPACE ORGANICS",
"SYMBIOSIS LIFE SCIENCES LTD",
"SYMBIOSIS PHARMACEUTICALS PVT LTD",
"SUZIKEM DRUGS PVT LTD",
"TRUMAC HEALTH CARE",
"TRUMAC HEALTHCARE",
"TYRANT PHARMA PVT LTD",
"ULTRA CHIRON PHARMACEUTICALS PVT LTD",
"UNISON LABORATORIES",
"UNIVERSAL MICRO SCIENCES",
"VERRMONT HEALTHCARE PVT LTD",
"VEECUBE HEALTHCARE PVT LTD",
"VSAAR PHARMA PVT LTD",
"VYBIA HEALTHCARE",
"WALTER BUSHNELL",
"WALTER BUSHNELL LTD"




  ];

  export const yearsOfProduction = [
    { title: "Year", value: "" },
    { title: "2015", value: "2015" },
    { title: "2016", value: "2016" },
    { title: "2017", value: "2017" },
    { title: "2018", value: "2018" },
    { title: "2019", value: "2019" },
    { title: "2020", value: "2020" },
    { title: "2021", value: "2021" },
    { title: "2022", value: "2022" },
    { title: "2023", value: "2023" },
  ];

  export const deviceTypes = [
    {
      title: "Device Type",
      value: "",
    },
    {
      title: "Diagnostic",
      value: "Diagnostic",
    },
    {
      title: "Therapeutic",
      value: "Therapeutic",
    },
    {
      title: "Surgical",
      value: "Surgical",
    },
    {
      title: "Monitoring",
      value: "Monitoring",
    },
  ];

  export const footerLinks = [
    {
      title: "About",
      links: [
        { title: "How it works", url: "/" },
        { title: "Featured", url: "/" },
        { title: "Partnership", url: "/" },
        { title: "Business Relations", url: "/" },
      ],
    },
    {
      title: "Company",
      links: [
        { title: "Events", url: "/" },
        { title: "Blog", url: "/" },
        { title: "Podcast", url: "/" },
        { title: "Invite a friend", url: "/" },
      ],
    },
    {
      title: "Socials",
      links: [
        { title: "LinkedIn", url: "/" },
        { title: "Instagram", url: "/" },
        { title: "Twitter", url: "/" },
        { title: "Facebook", url: "/" },
      ],
    },
  ];
  
  