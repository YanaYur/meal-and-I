import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render} from '@testing-library/react';
import MainIngredients from '../../components/MainIngredient/index';
import { BrowserRouter as Router } from 'react-router-dom';


test('renders content with ingredients', () => {
    // Arange
    let ingredients = [{
        "idIngredient": "1",
        "strIngredient": "Chicken",
        "strDescription": "The chicken is a type of domesticated fowl, a subspecies of the red junglefowl (Gallus gallus). It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011. There are more chickens in the world than any other bird or domesticated fowl. Humans keep chickens primarily as a source of food (consuming both their meat and eggs) and, less commonly, as pets. Originally raised for cockfighting or for special ceremonies, chickens were not kept for food until the Hellenistic period (4th–2nd centuries BC).\r\n\r\nGenetic studies have pointed to multiple maternal origins in South Asia, Southeast Asia, and East Asia, but with the clade found in the Americas, Europe, the Middle East and Africa originating in the Indian subcontinent. From ancient India, the domesticated chicken spread to Lydia in western Asia Minor, and to Greece by the 5th century BC. Fowl had been known in Egypt since the mid-15th century BC, with the \"bird that gives birth every day\" having come to Egypt from the land between Syria and Shinar, Babylonia, according to the annals of Thutmose III.",
        "strType": null
    },
    {
        "idIngredient": "2",
        "strIngredient": "Salmon",
        "strDescription": "Salmon is the common name for several species of ray-finned fish in the family Salmonidae. Other fish in the same family include trout, char, grayling and whitefish. Salmon are native to tributaries of the North Atlantic (genus Salmo) and Pacific Ocean (genus Oncorhynchus). Many species of salmon have been introduced into non-native environments such as the Great Lakes of North America and Patagonia in South America. Salmon are intensively farmed in many parts of the world.\r\n\r\nTypically, salmon are anadromous: they hatch in fresh water, migrate to the ocean, then return to fresh water to reproduce. However, populations of several species are restricted to fresh water through their lives. Folklore has it that the fish return to the exact spot where they hatched to spawn. Tracking studies have shown this to be mostly true. A portion of a returning salmon run may stray and spawn in different freshwater systems; the percent of straying depends on the species of salmon. Homing behavior has been shown to depend on olfactory memory. Salmon date back to the Neogene.",
        "strType": null
    },
    {
        "idIngredient": "3",
        "strIngredient": "Beef",
        "strDescription": "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times. Beef is a source of high-quality protein and nutrients.\r\n\r\nMost beef skeletal muscle meat can be used as is by merely cutting into certain parts, such as roasts, short ribs or steak (filet mignon, sirloin steak, rump steak, rib steak, rib eye steak, hanger steak, etc.), while other cuts are processed (corned beef or beef jerky). Trimmings, on the other hand, are usually mixed with meat from older, leaner (therefore tougher) cattle, are ground, minced or used in sausages. The blood is used in some varieties called blood sausage. Other parts that are eaten include other muscles and offal, such as the oxtail, liver, tongue, tripe from the reticulum or rumen, glands (particularly the pancreas and thymus, referred to as sweetbread), the heart, the brain (although forbidden where there is a danger of bovine spongiform encephalopathy, BSE, commonly referred to as mad cow disease), the kidneys, and the tender testicles of the bull (known in the United States as calf fries, prairie oysters, or Rocky Mountain oysters). Some intestines are cooked and eaten as is, but are more often cleaned and used as natural sausage casings. The bones are used for making beef stock.",
        "strType": null
    },]

    // Act
    const screen = render(<Router><MainIngredients data={ingredients} /></Router>)

    // Assert 
    const links = screen.getAllByRole('link')

    expect(links.length).toEqual(3);
    expect(links[0].href).toEqual(`http://localhost/search?ingredient=${ingredients[0].strIngredient}`);
    expect(links[1].href).toEqual(`http://localhost/search?ingredient=${ingredients[1].strIngredient}`);
    expect(links[2].href).toEqual(`http://localhost/search?ingredient=${ingredients[2].strIngredient}`);

    // const listElement = screen.getByRole('list');
    // const listItems = screen.getAllByRole('listitem');

    // expect(listElement).toBeInTheDocument();
    // expect(listElement).toHaveClass('animals');
    // expect(listItems.length).toEqual(5);

});