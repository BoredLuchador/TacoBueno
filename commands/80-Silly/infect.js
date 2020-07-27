const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'infect',
	aliases: ['cough', 'sneeze'],
	category: '80',
	description: 'Lets you infect someone you hate with something nasty.',
	cooldown : 15,
	args: true,
	usage: '<mention>',
	run: async (client, message, args) => {
		if (args[0]) {
			if (message.deletable) message.delete();

			let User = message.mentions.users.first() || client.users.cache.get(args[0]) || null;

			if (User == null) {
				User = message.author;
			}

			const replies = [
				'Acinetobacter Infection',
				'Acquired Immune Deficiency Syndrome (AIDS)',
				'Actinomycosis',
				'African sleeping sickness (African trypanosomiasis)',
				'Amoebiasis',
				'Anaplasmosis',
				'Angiostrongyliasis',
				'Anisakiasis',
				'Anthrax',
				'Arcanobacterium haemolyticum infection',
				'Argentine hemorrhagic fever (AHF)',
				'O\'Higgins disease',
				'mal de los rastrojos',
				'Ascariasis',
				'Aspergillosis',
				'Astrovirus infection',
				'Babesiosis',
				'Bacillus cereus infection',
				'Bacterial meningitis',
				'Bacterial pneumonia',
				'Bacterial vaginosis',
				'Bacteroides infection ',
				'Balantidiasis',
				'Bartonellosis',
				'Baylisascaris infection',
				'BK virus infection ',
				'Black piedra',
				'Blastocystosis',
				'Blastomycosis',
				'Bolivian hemorrhagic fever',
				'Botulism',
				'Brazilian hemorrhagic fever',
				'Brucellosis',
				'Bubonic plague',
				'Burkholderia infection',
				'Buruli ulcer',
				'Calicivirus infection',
				'Norovirus',
				'Sapovirus',
				'Campylobacteriosis',
				'Candidiasis (Moniliasis; Thrush)',
				'Capillariasis',
				'Carrion\'s disease',
				'Cat-scratch disease',
				'Cellulitis',
				'Chagas disease (American trypanosomiasis)',
				'Chancroid',
				'Chickenpox',
				'Chikungunya',
				'Chlamydia',
				'Chlamydophila pneumoniae infection (Taiwan acute respiratory agent or TWAR)',
				'Cholera',
				'Chromoblastomycosis',
				'Chytridiomycosis',
				'Clonorchiasis',
				'Clostridium difficile colitis',
				'Coccidioidomycosis',
				'Colorado tick fever (CTF)',
				'Common cold (Acute viral rhinopharyngitis; Acute coryza)',
				'COVID-19',
				'Creutzfeldt–Jakob disease (CJD)',
				'Crimean-Congo hemorrhagic fever (CCHF)',
				'Cryptococcosis',
				'Cryptosporidiosis',
				'Cutaneous larva migrans (CLM)',
				'Cyclosporiasis',
				'Cysticercosis',
				'Cytomegalovirus infection ',
				'Dengue fever',
				'Desmodesmus infection',
				'Dientamoebiasis',
				'Diphtheria',
				'Diphyllobothriasis',
				'Dracunculiasis',
				'Ebola',
				'Echinococcosis',
				'Ehrlichiosis',
				'Enterobiasis (Pinworm infection)',
				'Enterococcus infection',
				'Enterovirus infection',
				'Epidemic typhus',
				'Erythema infectiosum (Fifth disease)',
				'Exanthem subitum (Sixth disease)',
				'Fasciolasis',
				'Fasciolopsiasis',
				'Fatal familial insomnia (FFI)',
				'Filariasis',
				'Fusobacterium infection',
				'Gas gangrene (Clostridial myonecrosis)',
				'Geotrichosis',
				'Gerstmann-Sträussler-Scheinker syndrome (GSS)',
				'Giardiasis',
				'Glanders',
				'Gonorrhea',
				'Granuloma inguinale (Donovanosis)',
				'Haemophilus influenzae infection',
				'Hantavirus Pulmonary Syndrome (HPS)',
				'Heartland virus disease',
				'Helicobacter pylori infection',
				'Hemolytic-uremic syndrome (HUS)',
				'Hemorrhagic fever with renal syndrome (HFRS)',
				'Hendra virus infection',
				'Hepatitis',
				'Herpies',
				'Histoplasmosis',
				'Hookworm infection',
				'Human bocavirus infection',
				'Human ewingii ehrlichiosis',
				'Human granulocytic anaplasmosis (HGA)',
				'Human metapneumovirus infection',
				'Human monocytic ehrlichiosis',
				'Human papillomavirus (HPV) infection',
				'Human parainfluenza virus infection',
				'Hymenolepiasis',
				'Epstein–Barr virus infectious mononucleosis (Mono)',
				'Influenza (flu)',
				'Isosporiasis',
				'Kawasaki disease',
				'Keratitis',
				'Kingella kingae infection',
				'Kuru',
				'Lassa fever',
				'Legionellosis (Legionnaires\' disease)',
				'Pontiac fever',
				'Leishmaniasis',
				'Leprosy',
				'Leptospirosis',
				'Listeriosis',
				'Lyme disease (Lyme borreliosis)',
				'Lymphatic filariasis (Elephantiasis)',
				'Lymphocytic choriomeningitis',
				'Malaria',
				'Marburg hemorrhagic fever (MHF)',
				'Measles',
				'Middle East respiratory syndrome (MERS)',
				'Melioidosis (Whitmore\'s disease)',
				'Meningitis',
				'Meningococcal disease',
				'Metagonimiasis',
				'Microsporidiosis',
				'Molluscum contagiosum (MC)',
				'Monkeypox',
				'Mumps',
				'Murine typhus (Endemic typhus)',
				'Mycoplasma pneumonia',
				'Mycoplasma genitalium infection',
				'Mycetoma',
				'Myiasis',
				'Neonatal conjunctivitis (Ophthalmia neonatorum)',
				'Nipah virus infection',
				'Norovirus',
				'Nocardiosis',
				'Onchocerciasis (River blindness)',
				'Opisthorchiasis',
				'Paracoccidioidomycosis (South American blastomycosis)',
				'Paragonimiasis',
				'Pasteurellosis',
				'Pelvic inflammatory disease (PID)',
				'Pertussis',
				'THE PLAGUE',
				'Pneumococcal infection',
				'Pneumocystis pneumonia (PCP)',
				'Pneumonia',
				'Poliomyelitis',
				'Prevotella infection',
				'Primary amoebic meningoencephalitis (PAM)',
				'Progressive multifocal leukoencephalopathy',
				'Psittacosis',
				'Q fever',
				'Rabies',
				'Relapsing fever',
				'Respiratory syncytial virus infection',
				'Rhinosporidiosis',
				'Rhinovirus infection',
				'Rickettsial infection',
				'Rickettsialpox',
				'Rift Valley fever (RVF)',
				'Rocky Mountain spotted fever (RMSF)',
				'Rotavirus infection',
				'Rubella',
				'Salmonellosis',
				'SARS (severe acute respiratory syndrome)',
				'Scabies',
				'Scarlet fever',
				'Schistosomiasis',
				'Sepsis',
				'Shigellosis (bacillary dysentery)',
				'Shingles (Herpes zoster)',
				'Smallpox',
				'Sporotrichosis',
				'Strongyloidiasis',
				'Yaws',
				'Bejel',
				'Syphilis',
				'Taeniasis',
				'Tetanus (lockjaw)',
				'Tinea barbae (barber\'s itch)',
				'Tinea capitis (ringworm of the scalp)',
				'Tinea corporis (ringworm of the body)',
				'Tinea cruris (Jock itch)',
				'Tinea nigra',
				'Tinea pedis (athlete’s foot)',
				'Tinea unguium (onychomycosis)',
				'Tinea versicolor (Pityriasis versicolor)',
				'Toxocariasis (ocular larva migrans (OLM))',
				'Toxocariasis (visceral larva migrans (VLM))',
				'Toxoplasmosis',
				'Trachoma',
				'Trichinosis',
				'Trichomoniasis',
				'Trichuriasis (whipworm infection)',
				'Tuberculosis',
				'Tularemia',
				'Typhoid fever',
				'Typhus fever',
				'Ureaplasma urealyticum infection',
				'Valley fever',
				'Venezuelan equine encephalitis',
				'Venezuelan hemorrhagic fever',
				'Vibrio vulnificus infection',
				'Vibrio parahaemolyticus enteritis',
				'Viral pneumonia',
				'West Nile fever',
				'White piedra (tinea blanca)',
				'Yersinia pseudotuberculosis infection',
				'Yersiniosis',
				'Yellow fever',
				'Zeaspora',
				'Zika fever',
				'Zygomycosis',
			];

			try {
				const x = Math.floor((Math.random() * replies.length));
				const Embed = new MessageEmbed()
					.setColor('RANDOM')
					.setDescription(`${User} has been infected with ${replies[x]}`);

				const Channel = message.guild.channels.cache.find(ch=>ch.name.includes('medical'));
				if (!Channel) {
					message.channel.send(Embed);
					const msg = await message.channel.send('Sorry mate, your server doesn\'t have a channel that contains the word `medical`');
					await msg.delete({ timeout: 5000 });
				}
				else {
					Channel.send(Embed);
				}

			}
			catch (error) {
				console.error(error);
				message.channel.send(`Something went wrong.\nError details:\n${error}\n**If you keep running into this problem, please send this error message and send some ss to the developer.**`);
			}
		}
	},
};