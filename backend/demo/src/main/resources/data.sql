insert into category(name,description) values ('Clients/tiers, produits et pratiques commerciales',
                         'Les pertes ou les préjudices découlant d`une négligence ou d`un acte intentionnel au niveau de l’exercice d’un devoir professionnel vis-à-vis la clientèle de l’entreprise ainsi que les pertes ou les préjudices provenant de la conception ou de la nature d’un produit.')
                         ON CONFLICT ("name") DO NOTHING;
insert into category(name,description) values
                         ('Fraude interne','les pertes ou les préjudices provenant des actes intentionnels de fraude, de détournement des biens, de contournement aux règlements, à la législation ou à la politique de l’entreprise engageant au moins une partie interne de l’entreprise.')
                         ON CONFLICT ("name") DO NOTHING;

insert into control(name,description) values ('Accepting Risk','do not initiate any action but continue to supervise')
                         ON CONFLICT ("name") DO NOTHING;

insert into control(name,description) values ('Risk Reduction','reduce the probability of occurrence and/or the severity of impacts.')
                                               ON CONFLICT ("name") DO NOTHING;

insert into control(name,description) values ('Transfert risk','transfer responsibility for a risk to a third party who would bear the consequences of the problem')
                                               ON CONFLICT ("name") DO NOTHING;

insert into control(name,description) values ('Avoiding risk','total elimination of uncertainty')
                                               ON CONFLICT ("name") DO NOTHING;