insert into businesses(name, address, city, state, zip, type, lat, `long`, payment, photoref, url, createdAt, updatedAt)
values("Auburn Skate","1825 Howard Rd","Auburn","WA",98002,"other",47.2919119,-122.2117202,"tokens","CmRaAAAAG3Py5KXUawjFRDdPoEJd7V5QHXGVIvjX06flQPsv60tgCDoaV75lUUWdoLpwYon2KnP-Y1-J1BKM76ZcHbTXlMdiBdXekpmyx1jLHpRze3zHjnP-udPGuGTJaOv_AGzsEhBhD4Po2xv0IK9R4JeO8_jzGhQi7xi_dmpzrLH2oVGDN3FkXvr6wQ","https://maps.google.com/?cid=8137758952810396703",current_timestamp(), current_timestamp());

insert into businesses(name, address, city, state, zip, type, lat, `long`, payment, photoref, url, createdAt, updatedAt)
values("Rudy's barbershop","10713 Main St","Bellevue","WA",98004,"other",47.6099457,-122.1971252,"quarters","CmRaAAAAdHBrRJv0fEqFWNnol3HQc1UwzH5ceTz3KiUtUAzPnSplx-yfPlHMGoa-JuYSKfcXAWkInYA0A2g_qlmHh67k1CdtgQQz4YTyKEMl1z67upFrSfcO4T5bEi6aFSgFpONWEhAH1m9ojttz9UgrYGFGrgRgGhT4GUVzThRG4pXs-Gdt11xXskWCzg","https://maps.google.com/?cid=6140894749836081876",current_timestamp(), current_timestamp());

insert into businesses(name, address, city, state, zip, type, lat, `long`, payment, photoref, url, createdAt, updatedAt)
values("8-Bit Arcade","916 S 3rd St","Renton","WA",98057,"arcade",47.4798961,-122.2048324,"quarters","CmRaAAAAo9VNMjiPGHAzj6cB_6eND_GMC3VSNm9QubdOATHrTk7DSn_kBBaTLBpuXKB0fN0YfEttbFtl9hihsuIzeW7Cp6M15-kqVV2mpCo16yDx4asYM2lGCmQNzaq2F2MiwT-aEhD6FlARNGB9fMjubEmPTFttGhSjrWOl2musD22MApmOQuxl5Qf4Cw","https://maps.google.com/?cid=10502704653647525124",current_timestamp(), current_timestamp());

insert into businesses(name, address, city, state, zip, type, lat, `long`, payment, photoref, url, createdAt, updatedAt)
values("Star Lake Inn","3418 S Star Lake Rd","Auburn","WA",98001,"bar",47.3535044,-122.2890747,"quarters","CmRaAAAAoD7VMYHglDTqHXv_Uokb_BopspY959qmVzXJ-RWzgQ764ekhVKa0Gym_2Na7RlOT8quWPK-7vXQgUdiOdzo0Ean3CgaVI3qv9llBYfJ2odw9-Vy_7axrYCZDNgVh7OiBEhBwCj1WiNcJJEauh3wR3hL7GhTWesP35RuXFih8QrY6n_EnXD7glw","https://maps.google.com/?cid=14082246072439227194",current_timestamp(), current_timestamp());


insert into arcades(game, type, createdAt, updatedAt)
values("galaga", "arcade", current_timestamp(), current_timestamp());

insert into arcades(game, type, createdAt, updatedAt)
values("sunset riders", "arcade", current_timestamp(), current_timestamp());

insert into arcades(game, type, createdAt, updatedAt)
values("rampage", "arcade", current_timestamp(), current_timestamp());

insert into arcades(game, type, createdAt, updatedAt)
values("house of the dead 2", "arcade", current_timestamp(), current_timestamp());

insert into arcades(game, type, createdAt, updatedAt)
values("the simpsons", "arcade", current_timestamp(), current_timestamp());

insert into arcades(game, type, createdAt, updatedAt)
values("tron", "arcade", current_timestamp(), current_timestamp());

insert into arcades(game, type, createdAt, updatedAt)
values("pac man battle", "arcade", current_timestamp(), current_timestamp());


insert into businessarcades(createdAt, updatedAt, ArcadeId, BusinessId)
values
(current_timestamp(), current_timestamp(), 1, 3),
(current_timestamp(), current_timestamp(), 2, 3),
(current_timestamp(), current_timestamp(), 3, 3),
(current_timestamp(), current_timestamp(), 4, 3),
(current_timestamp(), current_timestamp(), 5, 3),
(current_timestamp(), current_timestamp(), 6, 3),
(current_timestamp(), current_timestamp(), 7, 3);


