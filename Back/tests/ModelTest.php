<?php

namespace App\Tests;

use App\Model\RickAndMortyModel;
use PHPUnit\Framework\TestCase;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class ModelTest extends WebTestCase
{
    public function testSetName(): void
    {
        $rickAndMortyModel = new RickAndMortyModel();
        $rickAndMortyModel->setName("Annie");
        $this->assertEquals("Annie", $rickAndMortyModel->getName());
    }

    public function testSetImage(): void
    {
        $rickAndMortyModel = new RickAndMortyModel();
        $rickAndMortyModel->setImage("https://rickandmortyapi.com/api/character/avatar/17.jpeg");
        $this->assertEquals("https://rickandmortyapi.com/api/character/avatar/17.jpeg", $rickAndMortyModel->getImage());
    }
}
