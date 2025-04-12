import { createContext, useContext } from "react";

// Context to manage the selected accordion item
type AccordionContextType = {
	selectedItem: string | null;
	setSelectedItem: (id: string | null) => void;
};

export const AccordionContext = createContext<AccordionContextType | undefined>(
	undefined
);

export const useAccordion = () => {
	const context = useContext(AccordionContext);
	if (!context) {
		throw new Error("useAccordion must be used within an AccordionProvider");
	}
	return context;
};
