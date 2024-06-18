
import Meals from "@/components/meals";
import styles from './styles.module.css';

export const metadata = {
    title: {
        absolute: 'Meals'
    },
    description: "Meals Page",
};

const MealsPage = () => {
    return (
        <div className="p-12 text-center min-h-screen">
            <h1 className="text-3xl font-semibold text-red-400">Choose Your Meals </h1>
            <p className={styles.font_large} >Choose meals of your choice by searching......</p>
            <Meals />
        </div>
    );
}

export default MealsPage;
