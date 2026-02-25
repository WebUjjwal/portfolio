    "use client";
    import { useEffect, useRef } from "react";
    import gsap from "gsap";

    import { IoCloseSharp } from "react-icons/io5";

    const alerts = [
    { text: "Welcome to our website", bg: "bg-gray-500/70" },
    { text: "New features released 🚀", bg: "bg-indigo-600/70" },
    { text: "Portfolio updated", bg: "bg-emerald-600/70" },
    { text: "Contact us for projects", bg: "bg-pink-600/70" }
    ];

    export default function AlertTicker() {
    const boxRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    alerts.forEach(item => {
        tl.set(boxRef.current, {
        className: ` min_container w-full overflow-hidden pl-4 pr-2 py-2 flex items-center justify-between rounded-full text-center text-white text-lg font-medium backdrop-blur-md ${item.bg}`
        })
        .set(textRef.current, { textContent: item.text })

        // enter
        .fromTo(
        textRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.2, ease: "power3.out" }
        )

        // stay visible
        .to({}, { duration: 2 })  // fake tween = pause

        // exit
        .to(
        textRef.current,
        { y: -40, opacity: 0, duration: 0.2, ease: "power3.in" }
        );
    });
    }, []);


    return (
        <div ref={boxRef}
        className="">

        <span ref={textRef} className="w-full text-center left-1/2 -translate-x-1/2" />

        <button
            onClick={() => gsap.to(boxRef.current, { opacity: 0, display: "none", duration: 0.4, })}
            className="w-8 h-8 bg-black flex items-center justify-center rounded-full cursor-pointer text-white/70 hover:text-white text-xl">
            <IoCloseSharp />    
        </button>
        </div>
    );
    }
