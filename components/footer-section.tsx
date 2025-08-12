"use client"

import { Twitter, Github, Linkedin } from "lucide-react"

export function FooterSection() {
  return (
    <footer className="w-full max-w-[1320px] mx-auto px-5 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0 py-10 md:py-[70px]">
      {/* Left Section: Logo, Description, Social Links */}
      <div className="flex flex-col justify-start items-start gap-8 p-4 md:p-8">
        <div className="flex gap-3 items-stretch justify-center">
          <div className="text-center text-foreground text-xl font-semibold leading-4">SVG Library</div>
        </div>
        <p className="text-foreground/90 text-sm font-medium leading-[18px] text-left">Free SVG icons for everyone</p>
        <div className="flex justify-start items-start gap-3">
          <a href="#" aria-label="Twitter" className="w-4 h-4 flex items-center justify-center">
            <Twitter className="w-full h-full text-muted-foreground" />
          </a>
          <a href="#" aria-label="GitHub" className="w-4 h-4 flex items-center justify-center">
            <Github className="w-full h-full text-muted-foreground" />
          </a>
          <a href="#" aria-label="LinkedIn" className="w-4 h-4 flex items-center justify-center">
            <Linkedin className="w-full h-full text-muted-foreground" />
          </a>
        </div>
      </div>
      {/* Right Section: Resources, Tools, Legal */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 p-4 md:p-8 w-full md:w-auto">
        <div className="flex flex-col justify-start items-start gap-3">
          <h3 className="text-muted-foreground text-sm font-medium leading-5">Resources</h3>
          <div className="flex flex-col justify-end items-start gap-2">
            <a href="/icons" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Icons
            </a>
            <a href="/logos" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Logos
            </a>
            <a href="/convert" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Image to SVG
            </a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Categories
            </a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Usage Guide
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          <h3 className="text-muted-foreground text-sm font-medium leading-5">Tools</h3>
          <div className="flex flex-col justify-center items-start gap-2">
            <a href="/convert" className="text-foreground text-sm font-normal leading-5 hover:underline">
              SVG Converter
            </a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              SVG Optimizer
            </a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Color Picker
            </a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Size Calculator
            </a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Bulk Download
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          <h3 className="text-muted-foreground text-sm font-medium leading-5">Legal</h3>
          <div className="flex flex-col justify-center items-start gap-2">
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Terms of Use
            </a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              License
            </a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Contact
            </a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
