import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientGg";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3  lg:grid-cols-6 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  title,
  titleClassName,
  description,
  className,
  img,
  imgClassName,
  spareImg,
}: {
  id?: number;
  title?: string | React.ReactNode;
  titleClassName?: string;
  description?: string | React.ReactNode;
  className?: string;
  img?:string;
  imgClassName?:string;
  spareImg?:string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative  rounded-2xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4  ",
        className
      )}
      style={{
        background: 'rgb(4,7,29)',
        backgroundColor: 'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
      }}
    >

      <div className={`${id === 6 && 'flex justify-center h-full'}`}>
        <div className="w-full h-full absolute">
          {img && (
            <img 
              src={img} 
              alt={img}
              className={cn(imgClassName,'object-cover object-center')}
            />
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id ===5 && 'w-full opacity-80'}`}>
          {spareImg && (
            <img 
            src={spareImg} 
            alt={spareImg}
            className={cn('object-cover object-center w-full h-full')}
          />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold ">
            </div>
          </BackgroundGradientAnimation>
        )}
        <div className={cn(titleClassName,'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col p-5 lg:p-10 ')}>
          <div>
            {description}
          </div>
        </div>
      </div>
      
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
