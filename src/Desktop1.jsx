import React from "react";

const Desktop1 = () => {
    return (
        <div className="w-[1440px] bg-white max-w-full h-[1409px] overflow-hidden text-center text-base text-dimgray-500 font-open-sans">
            <div className="absolute top-[94px] left-[0px] bg-primary-tint-2 w-[1440px] h-[221px] overflow-hidden text-gray-700 font-aushadham-text-styles-body-large-regular">
                <div className="absolute top-[113px] left-[234px] rounded-[50%] bg-beige w-[184px] h-[184px]" />
                <div className="absolute top-[104px] left-[1071px] rounded-[50%] bg-beige w-[184px] h-[184px]" />
                <div className="absolute top-[-100px] left-[115px] rounded-[50%] bg-beige w-[184px] h-[184px]" />
                <div className="absolute top-[-108px] left-[1149px] rounded-[50%] bg-beige w-[184px] h-[184px]" />
                <div className="absolute top-[121px] left-[385px] flex flex-row items-start justify-start gap-[8px]">
                    <div className="w-[200px] rounded-lg bg-white box-border h-[54px] flex flex-row items-center justify-center py-1 px-3 gap-[8px] border-[1px] border-solid border-lightgray-100">
                        <img
                            className="w-6 relative h-6 overflow-hidden shrink-0"
                            alt=""
                            src="/location.svg"
                        />
                        <div className="relative tracking-[0.01em] leading-[24px]">
                            Select Location
                        </div>
                        <img
                            className="w-[17.9px] relative h-5 overflow-hidden shrink-0"
                            alt=""
                            src="/akariconschevrondown.svg"
                        />
                    </div>
                    <div className="rounded-3xs bg-white box-border h-[54px] overflow-hidden flex flex-row items-center justify-center py-[13px] px-2.5 gap-[105px] text-gray-600 border-[1px] border-solid border-lightgray-200">
                        <div className="w-[321.8px] relative tracking-[0.5px] inline-block h-[19px] shrink-0">
                            eg. Doctor, specialisation, clinic name
                        </div>
                        <img
                            className="w-[28.2px] relative h-6"
                            alt=""
                            src="/iconsarrow-forward-24px.svg"
                        />
                    </div>
                </div>
                <div className="absolute top-[60px] left-[315px] text-13xl tracking-[0.01em] leading-[24px] capitalize font-medium font-lato text-black">{`Find expert Doctors for an In-clinic session here `}</div>
            </div>
            <div className="absolute top-[0px] left-[0px] bg-oldlace w-[1440px] h-[94px]" />
            <div className="absolute top-[23px] left-[104px] flex flex-row items-center justify-center gap-[266px] text-left text-xl text-darkslategray-100">
                <div className="flex flex-row items-center justify-start gap-[80px]">
                    <img
                        className="w-[259px] relative h-[49px] object-cover"
                        alt=""
                        src="/image-45@2x.png"
                    />
                    <div className="flex flex-row items-start justify-start gap-[40px]">
                        <div className="relative leading-[140%] capitalize font-medium">
                            Home
                        </div>
                        <div className="relative leading-[140%] capitalize font-noto-sans-jp text-darkolivegreen-100">
                            find doctors
                        </div>
                        <div className="relative leading-[140%] capitalize font-medium">{`About us `}</div>
                    </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[16px] text-5xl text-darkolivegreen-100">
                    <div className="w-[120px] rounded-2xs bg-oldlace box-border h-[58px] overflow-hidden shrink-0 flex flex-row items-center justify-center pt-[11px] px-[37px] pb-4 border-[1px] border-solid border-darkolivegreen-100">
                        <div className="w-[60px] relative font-medium inline-block h-[30px] shrink-0">
                            Login
                        </div>
                    </div>
                    <div className="rounded-2xs bg-darkolivegreen-100 h-14 overflow-hidden flex flex-row items-center justify-center pt-4 px-[39px] pb-5 box-border text-white">
                        <div className="relative font-medium">Sign-up</div>
                    </div>
                </div>
            </div>
            <div className="absolute top-[315px] left-[0px] bg-white box-border w-[1440px] h-[72px] border-[1px] border-solid border-whitesmoke-200" />
            <div className="absolute top-[333px] left-[234px] rounded-6xs bg-whitesmoke-100 h-10 overflow-hidden flex flex-row items-center justify-start py-1.5 px-[13px] box-border gap-[41px]">
                <div className="relative leading-[140%] font-medium">Expertise</div>
                <img className="w-3 relative h-[5px]" alt="" src="/vector2.svg" />
            </div>
            <div className="absolute top-[333px] left-[436px] rounded-6xs bg-whitesmoke-100 h-10 overflow-hidden flex flex-row items-center justify-start py-1.5 px-[13px] box-border gap-[56px]">
                <div className="relative leading-[140%] font-medium">Gender</div>
                <img className="w-3 relative h-[5px]" alt="" src="/vector2.svg" />
            </div>
            <div className="absolute top-[333px] left-[648px] rounded-6xs bg-whitesmoke-100 h-10 overflow-hidden flex flex-row items-center justify-start py-1.5 px-[15px] box-border gap-[70px]">
                <div className="relative leading-[140%] font-medium">Fees</div>
                <img className="w-3 relative h-[5px]" alt="" src="/vector2.svg" />
            </div>
            <div className="absolute top-[333px] left-[853px] rounded-6xs bg-whitesmoke-100 h-10 overflow-hidden flex flex-row items-center justify-start py-1.5 px-3 box-border gap-[32px]">
                <div className="relative leading-[140%] font-medium">Languages</div>
                <img className="w-3 relative h-[5px]" alt="" src="/vector2.svg" />
            </div>
            <div className="absolute top-[333px] left-[1057px] rounded-6xs bg-honeydew h-10 overflow-hidden flex flex-row items-center justify-start py-1.5 pr-2.5 pl-[13px] box-border gap-[40px] text-darkolivegreen-100">
                <div className="relative leading-[140%] font-medium">All filters</div>
                <img className="w-3 relative h-[5px]" alt="" src="/vector2.svg" />
            </div>
            <div className="absolute top-[447px] left-[748px] flex flex-row items-start justify-start gap-[16px] text-black font-aushadham-text-styles-body-large-regular">
                <div className="w-[139px] rounded-12xl bg-primary-tint-2 h-[45px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[15px] px-[30px] box-border gap-[10px]">
                    <div className="relative tracking-[0.5px]">{`Hair care `}</div>
                    <img
                        className="w-[11.2px] relative h-[11.3px]"
                        alt=""
                        src="/group-39486.svg"
                    />
                </div>
                <div className="w-[126px] rounded-12xl bg-primary-tint-2 h-[45px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[15px] px-[38px] box-border gap-[10px]">
                    <div className="relative tracking-[0.5px]">Female</div>
                    <img
                        className="w-[11.2px] relative h-[11.3px]"
                        alt=""
                        src="/group-394861.svg"
                    />
                </div>
                <div className="rounded-12xl bg-primary-tint-2 h-[45px] overflow-hidden flex flex-row items-center justify-center py-[15px] px-[17px] box-border gap-[10px]">
                    <div className="relative tracking-[0.5px]">Rs.0-Rs.500</div>
                    <img
                        className="w-[11.2px] relative h-[11.3px]"
                        alt=""
                        src="/group-394862.svg"
                    />
                </div>
                <div className="w-[104px] rounded-12xl bg-primary-tint-2 h-[45px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[15px] px-[25px] box-border gap-[10px]">
                    <div className="relative tracking-[0.5px]">Hindi</div>
                    <img
                        className="w-[11.2px] relative h-[11.3px]"
                        alt=""
                        src="/group-394861.svg"
                    />
                </div>
            </div>
            <div className="absolute top-[545px] left-[166px] shadow-[0px_4px_12.5px_rgba(0,_0,_0,_0.07)] rounded-11xl bg-oldlace box-border w-[356px] h-[561px] overflow-hidden text-left text-white font-noto-sans-jp border-[1px] border-solid border-gainsboro-300">
                <div className="absolute top-[29px] left-[36px] flex flex-col items-center justify-start gap-[32px]">
                    <div className="flex flex-col items-center justify-start gap-[21px]">
                        <div className="w-[149px] relative h-[154px]">
                            <img
                                className="absolute top-[0px] left-[0px] rounded-[50%] w-[149px] h-[150px] object-cover"
                                alt=""
                                src="/ellipse-725@2x.png"
                            />
                            <div className="absolute top-[126px] left-[47px] rounded-mid [background:linear-gradient(180deg,_#0b0b0b,_rgba(11,_11,_11,_0.79))] h-7 overflow-hidden flex flex-col items-start justify-start py-1 px-3 box-border">
                                <div className="flex flex-row items-end justify-start gap-[4px]">
                                    <div className="relative tracking-[-0.01em] leading-[18px]">
                                        4.5
                                    </div>
                                    <img
                                        className="w-5 relative h-5 overflow-hidden shrink-0"
                                        alt=""
                                        src="/materialsymbolsstar.svg"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-[289px] flex flex-col items-start justify-start gap-[16px] text-13xl text-neutrals-900 font-body-1-regular">
                            <b className="relative tracking-[-0.01em] leading-[28px]">
                                Dr. Prerna Narang
                            </b>
                            <div className="w-[289px] flex flex-col items-center justify-center gap-[16px] text-base text-dimgray-100">
                                <div className="flex flex-col items-start justify-start gap-[7px]">
                                    <div className="flex flex-row items-center justify-start gap-[15px]">
                                        <img
                                            className="w-4 relative h-4 overflow-hidden shrink-0"
                                            alt=""
                                            src="/frame2.svg"
                                        />
                                        <div className="relative tracking-[-0.01em] leading-[20px]">
                                            Male-Female Infertility
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center justify-start gap-[7px]">
                                        <img
                                            className="w-6 relative h-6 overflow-hidden shrink-0"
                                            alt=""
                                            src="/frame3.svg"
                                        />
                                        <div className="relative tracking-[-0.01em] leading-[20px] font-semibold">
                                            7 years of Experience
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center justify-start gap-[12px] text-dimgray-200">
                                        <img
                                            className="w-[18px] relative h-4 object-cover"
                                            alt=""
                                            src="/comment-1@2x.png"
                                        />
                                        <div className="relative tracking-[-0.01em] leading-[20px]">
                                            Speaks: English, Hindi, Marathi
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[289px] flex flex-row items-center justify-center gap-[8px] text-sm text-darkslategray-200">
                                    <div className="rounded-3xs bg-oldlace box-border h-[57px] flex flex-col items-center justify-start pt-2 px-2 pb-4 gap-[4px] border-[1px] border-solid border-darkolivegreen-200">
                                        <div className="relative tracking-[-0.01em] leading-[20px] font-semibold">
                                            Video Consultation
                                        </div>
                                        <b className="relative tracking-[-0.01em] leading-[20px] text-darkolivegreen-100">
                                            ₹800
                                        </b>
                                    </div>
                                    <div className="rounded-3xs bg-oldlace box-border h-[57px] flex flex-col items-center justify-start pt-2 px-2 pb-1 gap-[4px] border-[1px] border-solid border-darkolivegreen-200">
                                        <div className="relative tracking-[-0.01em] leading-[20px] font-semibold">
                                            Chat Consultation
                                        </div>
                                        <b className="relative tracking-[-0.01em] leading-[20px] text-darkolivegreen-100">
                                            Free
                                        </b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[286px] flex flex-col items-center justify-start gap-[9px] text-darkolivegreen-100 font-body-1-regular">
                        <div className="w-[284px] rounded-lg bg-white box-border h-[42px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[15px] px-[78px] border-[1px] border-solid border-darkolivegreen-100">
                            <div className="relative tracking-[-0.01em] leading-[20px] font-semibold">
                                View Profile
                            </div>
                        </div>
                        <div className="w-[287px] rounded-lg bg-darkolivegreen-100 h-[53px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[15px] px-[37px] box-border text-white">
                            <div className="relative tracking-[-0.01em] leading-[20px] font-semibold">
                                Book a consultation
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute top-[545px] left-[562px] shadow-[0px_4px_12.5px_rgba(0,_0,_0,_0.07)] rounded-11xl bg-oldlace box-border w-[356px] h-[561px] overflow-hidden text-left text-white font-noto-sans-jp border-[1px] border-solid border-gainsboro-300">
                <div className="absolute top-[29px] left-[36px] flex flex-col items-center justify-start gap-[32px]">
                    <div className="flex flex-col items-center justify-start gap-[21px]">
                        <div className="w-[149px] relative h-[154px]">
                            <img
                                className="absolute top-[0px] left-[0px] rounded-[50%] w-[149px] h-[150px] object-cover"
                                alt=""
                                src="/ellipse-725@2x.png"
                            />
                            <div className="absolute top-[126px] left-[47px] rounded-mid [background:linear-gradient(180deg,_#0b0b0b,_rgba(11,_11,_11,_0.79))] h-7 overflow-hidden flex flex-col items-start justify-start py-1 px-3 box-border">
                                <div className="flex flex-row items-end justify-start gap-[4px]">
                                    <div className="relative tracking-[-0.01em] leading-[18px]">
                                        4.5
                                    </div>
                                    <img
                                        className="w-5 relative h-5 overflow-hidden shrink-0"
                                        alt=""
                                        src="/materialsymbolsstar.svg"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-[289px] flex flex-col items-start justify-start gap-[16px] text-13xl text-neutrals-900 font-body-1-regular">
                            <b className="relative tracking-[-0.01em] leading-[28px]">
                                Dr. Prerna Narang
                            </b>
                            <div className="w-[289px] flex flex-col items-center justify-center gap-[16px] text-base text-dimgray-100">
                                <div className="flex flex-col items-start justify-start gap-[7px]">
                                    <div className="flex flex-row items-center justify-start gap-[15px]">
                                        <img
                                            className="w-4 relative h-4 overflow-hidden shrink-0"
                                            alt=""
                                            src="/frame2.svg"
                                        />
                                        <div className="relative tracking-[-0.01em] leading-[20px]">
                                            Male-Female Infertility
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center justify-start gap-[7px]">
                                        <img
                                            className="w-6 relative h-6 overflow-hidden shrink-0"
                                            alt=""
                                            src="/frame3.svg"
                                        />
                                        <div className="relative tracking-[-0.01em] leading-[20px] font-semibold">
                                            7 years of Experience
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center justify-start gap-[12px] text-dimgray-200">
                                        <img
                                            className="w-[18px] relative h-4 object-cover"
                                            alt=""
                                            src="/comment-1@2x.png"
                                        />
                                        <div className="relative tracking-[-0.01em] leading-[20px]">
                                            Speaks: English, Hindi, Marathi
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[289px] flex flex-row items-center justify-center gap-[8px] text-sm text-darkslategray-200">
                                    <div className="rounded-3xs bg-oldlace box-border h-[57px] flex flex-col items-center justify-start pt-2 px-2 pb-4 gap-[4px] border-[1px] border-solid border-darkolivegreen-200">
                                        <div className="relative tracking-[-0.01em] leading-[20px] font-semibold">
                                            Video Consultation
                                        </div>
                                        <b className="relative tracking-[-0.01em] leading-[20px] text-darkolivegreen-100">
                                            ₹800
                                        </b>
                                    </div>
                                    <div className="rounded-3xs bg-oldlace box-border h-[57px] flex flex-col items-center justify-start pt-2 px-2 pb-1 gap-[4px] border-[1px] border-solid border-darkolivegreen-200">
                                        <div className="relative tracking-[-0.01em] leading-[20px] font-semibold">
                                            Chat Consultation
                                        </div>
                                        <b className="relative tracking-[-0.01em] leading-[20px] text-darkolivegreen-100">
                                            Free
                                        </b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[286px] flex flex-col items-center justify-start gap-[9px] text-darkolivegreen-100 font-body-1-regular">
                        <div className="w-[284px] rounded-lg bg-white box-border h-[42px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[15px] px-[78px] border-[1px] border-solid border-darkolivegreen-100">
                            <div className="relative tracking-[-0.01em] leading-[20px] font-semibold">
                                View Profile
                            </div>
                        </div>
                        <div className="w-[287px] rounded-lg bg-darkolivegreen-100 h-[53px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[15px] px-[37px] box-border text-white">
                            <div className="relative tracking-[-0.01em] leading-[20px] font-semibold">
                                Book a consultation
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute top-[545px] left-[958px] shadow-[0px_4px_12.5px_rgba(0,_0,_0,_0.07)] rounded-11xl bg-oldlace box-border w-[356px] h-[561px] overflow-hidden text-left text-white font-noto-sans-jp border-[1px] border-solid border-gainsboro-300">
                <div className="absolute top-[29px] left-[36px] flex flex-col items-center justify-start gap-[32px]">
                    <div className="flex flex-col items-center justify-start gap-[21px]">
                        <div className="w-[149px] relative h-[154px]">
                            <img
                                className="absolute top-[0px] left-[0px] rounded-[50%] w-[149px] h-[150px] object-cover"
                                alt=""
                                src="/ellipse-725@2x.png"
                            />
                            <div className="absolute top-[126px] left-[47px] rounded-mid [background:linear-gradient(180deg,_#0b0b0b,_rgba(11,_11,_11,_0.79))] h-7 overflow-hidden flex flex-col items-start justify-start py-1 px-3 box-border">
                                <div className="flex flex-row items-end justify-start gap-[4px]">
                                    <div className="relative tracking-[-0.01em] leading-[18px]">
                                        4.5
                                    </div>
                                    <img
                                        className="w-5 relative h-5 overflow-hidden shrink-0"
                                        alt=""
                                        src="/materialsymbolsstar.svg"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-[289px] flex flex-col items-start justify-start gap-[16px] text-13xl text-neutrals-900 font-body-1-regular">
                            <b className="relative tracking-[-0.01em] leading-[28px]">
                                Dr. Prerna Narang
                            </b>
                            <div className="w-[289px] flex flex-col items-center justify-center gap-[16px] text-base text-dimgray-100">
                                <div className="flex flex-col items-start justify-start gap-[7px]">
                                    <div className="flex flex-row items-center justify-start gap-[15px]">
                                        <img
                                            className="w-4 relative h-4 overflow-hidden shrink-0"
                                            alt=""
                                            src="/frame2.svg"
                                        />
                                        <div className="relative tracking-[-0.01em] leading-[20px]">
                                            Male-Female Infertility
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center justify-start gap-[7px]">
                                        <img
                                            className="w-6 relative h-6 overflow-hidden shrink-0"
                                            alt=""
                                            src="/frame3.svg"
                                        />
                                        <div className="relative tracking-[-0.01em] leading-[20px] font-semibold">
                                            7 years of Experience
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center justify-start gap-[12px] text-dimgray-200">
                                        <img
                                            className="w-[18px] relative h-4 object-cover"
                                            alt=""
                                            src="/comment-1@2x.png"
                                        />
                                        <div className="relative tracking-[-0.01em] leading-[20px]">
                                            Speaks: English, Hindi, Marathi
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[289px] flex flex-row items-center justify-center gap-[8px] text-sm text-darkslategray-200">
                                    <div className="rounded-3xs bg-oldlace box-border h-[57px] flex flex-col items-center justify-start pt-2 px-2 pb-4 gap-[4px] border-[1px] border-solid border-darkolivegreen-200">
                                        <div className="relative tracking-[-0.01em] leading-[20px] font-semibold">
                                            Video Consultation
                                        </div>
                                        <b className="relative tracking-[-0.01em] leading-[20px] text-darkolivegreen-100">
                                            ₹800
                                        </b>
                                    </div>
                                    <div className="rounded-3xs bg-oldlace box-border h-[57px] flex flex-col items-center justify-start pt-2 px-2 pb-1 gap-[4px] border-[1px] border-solid border-darkolivegreen-200">
                                        <div className="relative tracking-[-0.01em] leading-[20px] font-semibold">
                                            Chat Consultation
                                        </div>
                                        <b className="relative tracking-[-0.01em] leading-[20px] text-darkolivegreen-100">
                                            Free
                                        </b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[286px] flex flex-col items-center justify-start gap-[9px] text-darkolivegreen-100 font-body-1-regular">
                        <div className="w-[284px] rounded-lg bg-white box-border h-[42px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[15px] px-[78px] border-[1px] border-solid border-darkolivegreen-100">
                            <div className="relative tracking-[-0.01em] leading-[20px] font-semibold">
                                View Profile
                            </div>
                        </div>
                        <div className="w-[287px] rounded-lg bg-darkolivegreen-100 h-[53px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[15px] px-[37px] box-border text-white">
                            <div className="relative tracking-[-0.01em] leading-[20px] font-semibold">
                                Book a consultation
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Desktop1;
